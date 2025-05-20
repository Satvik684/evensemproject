from pymongo import MongoClient
import json

# Load cleaned JSON
with open('scholarships_uk_rated.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")  # Replace with your actual URI
db = client['evensemprojdb']                   # Replace with your DB name
collection = db['scrapeduks']             # Replace with your collection name

# Insert data
if isinstance(data, list):
    collection.insert_many(data)  # Insert multiple documents
else:
    collection.insert_one(data)   # Insert single document

print("Data inserted into MongoDB successfully!")
