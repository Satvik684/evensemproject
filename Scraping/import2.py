from pymongo import MongoClient, errors
import json

try:
    # Load the JSON data
    with open('scholarships_usa_rated.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Connect to MongoDB
    client = MongoClient("mongodb://localhost:27017/")
    db = client['evensemprojdb']
    collection_name = 'scrapedusas'

    # Drop the collection if it exists (completely overwrite)
    if collection_name in db.list_collection_names():
        db.drop_collection(collection_name)
        print(f"Collection '{collection_name}' dropped.")

    # Re-create the collection
    collection = db[collection_name]

    # Insert the data
    if isinstance(data, list):
        collection.insert_many(data)
    else:
        collection.insert_one(data)

    print("Collection overwritten and data inserted successfully!")

except FileNotFoundError:
    print("Error: JSON file not found.")
except json.JSONDecodeError:
    print("Error: Failed to parse JSON.")
except errors.PyMongoError as e:
    print(f"MongoDB error: {e}")
