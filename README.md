# 🎓 Scholar Buddy

> Your smart companion for discovering the best scholarships tailored for you!

**Scholar Buddy** is a full-stack web application built with the MERN stack that helps students explore and manage scholarship opportunities with ease. It uses a Python-powered web scraper to fetch real-time scholarship data and stores it in MongoDB. The frontend offers a seamless browsing experience with features like filtering, wishlisting, and secure user authentication.

---

## 📚 Features

- 🧠 Intelligent scholarship discovery
- 🐍 Python scraper for real-time data collection
- 🗃️ MongoDB data storage with PyMongo
- 💻 React-based user interface with clean UI/UX
- 🔐 User authentication using JWT and bcrypt
- ❤️ Wishlist feature to save favorite scholarships
- 📂 REST API built with Node.js and Express
- ★ Student friendly rating using sentiment analaysis

---

## 🧰 Tech Stack

| Layer      | Tech Used                                |
|------------|-------------------------------------------|
| Frontend   | React, Axios, React Router DOM, Tailwind  |
| Backend    | Node.js, Express.js, MongoDB, Mongoose    |
|Matching Algo| Fuse.js    |
| Scraper    | Python, Selenium, PyMongo     |
| Auth       | JWT, bcrypt                |
| Database   | MongoDB (local)                  |

---

## 🚀 Getting Started

Clone the project and install dependencies for all parts:

```bash
git clone https://github.com/Satvik684/evensemproject.git
cd evensemproject
```
## 🔧 Backend Setup
```bash
cd backend
npm install
```
## Create a .env file in /backend with the following:

```env
DBURL=your_mongodb_connection_string
SECRET=your_jwt_secret
PORT=4000
```
## Then, start the backend server:

```bash
npm start
```
## 💻 Frontend Setup
```bash
cd front-end
npm install
npm run dev
```

## Database Setup
## For your convenience we have already added the scraped json file with student ratings . To save the files in your local MongoDB database do the following
## in /Scraping run the follwing command to install pymongo
```bash
pip install pymongo
```
## Now in import.py file do the following changes
```python
# Load the JSON data
    with open('file to be added', 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Connect to MongoDB
    client = MongoClient("your db url")
    db = client['evensemprojdb']
    collection_name = 'put a collection name'
```
Make sure to name the db as given . Now add the 4 different files in the db with the following collection name

| 📄 `.json` File Name         | 🗂️ MongoDB Collection Name |
|-----------------------------|-----------------------------|
| 'scholarship_sentiment_rated.json'         | 'scrapeds'             |
| 'scholarships_aus_rated.json'                | 'scrapedaus'                    |
| 'scholarships_uk_rated'           | 'scrapeduks'               |
| 'scholarships_usa_rated'   | 'scrapedusas'                   |

Run the code seperatley for each file
```bash
python import.py
```

## Usage
After this the project should be ready to run on your computer . You can run the project on http://localhost:5173/ . If you face any issue please raise it in the issues section

    

