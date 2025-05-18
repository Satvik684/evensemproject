from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import json
import time

# --- Step 1: Setup Brave browser ---
brave_path = "C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe"
options = Options()
options.binary_location = brave_path

# --- Step 2: Launch Brave browser with WebDriver manager ---
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
driver.maximize_window()

# --- Step 3: Open target site ---
url = "https://www.wemakescholars.com/scholarships-for-indian-students-to-study-in-india"
driver.get(url)

# --- Step 4: Wait for scholarship content to load ---
wait = WebDriverWait(driver, 15)
wait.until(EC.presence_of_element_located((By.ID, "scholarship-content")))

# --- Step 5: Scroll to load all content ---
last_height = driver.execute_script("return document.body.scrollHeight")
while True:
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(4)
    new_height = driver.execute_script("return document.body.scrollHeight")
    if new_height == last_height:
        break
    last_height = new_height

# --- Step 6: Extract scholarship info ---
posts = driver.find_elements(By.CSS_SELECTOR, "#scholarship-content .sub-post.clearfix")
print(f"✅ Found {len(posts)} scholarships")

scholarships = []

for post in posts:
    try:
        title = post.find_element(By.CSS_SELECTOR, "h2.post-title a").text.strip()

        # Get rows containing degree/funding and course/deadline
        rows = post.find_elements(By.CSS_SELECTOR, "div.row")
        degree_and_funding = rows[0].find_elements(By.CSS_SELECTOR, ".text-line-div span")
        eligible_degrees = degree_and_funding[0].text.strip() if len(degree_and_funding) > 0 else ""
        funding_type = degree_and_funding[1].text.strip() if len(degree_and_funding) > 1 else ""

        course_and_deadline = rows[1].find_elements(By.CSS_SELECTOR, ".text-line-div span")
        eligible_courses = course_and_deadline[0].text.strip() if len(course_and_deadline) > 0 else ""
        deadline = course_and_deadline[1].text.strip() if len(course_and_deadline) > 1 else ""

        # Location is in the second text-line-div after 'Eligible Nationalities'
        text_lines = post.find_elements(By.CSS_SELECTOR, ".text-line-div")
        location = ""
        for i, div in enumerate(text_lines):
            if "Scholarship can be taken at:" in div.text:
                location = div.find_element(By.TAG_NAME, "span").text.strip()
                break

        # Extract link and image
        try:
            link_element = post.find_element(By.CSS_SELECTOR, "div.p0 a")
            relative_link = link_element.get_attribute("href")
            full_link = relative_link if relative_link.startswith("http") else "https://www.wemakescholars.com" + relative_link
        except:
            full_link = ""

        try:
            image_url = post.find_element(By.CSS_SELECTOR, "img.internship-col-img").get_attribute("src")
        except:
            image_url = ""

        scholarships.append({
            "scholarship_name": title,
            "eligible_degrees": eligible_degrees,
            "funding_type": funding_type,
            "eligible_courses": eligible_courses,
            "deadline": deadline,
            "location": location,
            "link": full_link,
            "image_url": image_url
        })

    except Exception as e:
        print("⚠️ Skipped one due to error:", e)
        continue

# --- Step 7: Save to JSON ---
with open("scholarships.json", "w", encoding="utf-8") as f:
    json.dump(scholarships, f, ensure_ascii=False, indent=4)

driver.quit()
print(f"✅ Done! Saved {len(scholarships)} scholarships to scholarships.json")
