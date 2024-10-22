import json
from pymongo import MongoClient

# MongoDB setup
client = MongoClient("mongodb://localhost:27017/")
db = client["blackcoffer_db"]
collection = db["blackcoffer_collection"]

# Insert data from JSON file into MongoDB
with open('C:/Users/himan/Desktop/Blackcoffer_23/data/jsondata.json', 'r', encoding='utf-8') as file:
    data = json.load(file)
    collection.insert_many(data)

print("Data inserted successfully!")
