from flask import Flask, jsonify, render_template
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app) 

# MongoDB setup
client = MongoClient("mongodb://localhost:27017/")
db = client["blackcoffer_db"]
collection = db["blackcoffer_collection"]

# home route to fetch data and return it as JSON
@app.route('/')
def home():
    data = list(collection.find({}, {'_id': 0})) 
    return jsonify(data)

# route to render the index.html template
@app.route('/index')
def index():
    return render_template('index.html')

# API Route to fetch data from MongoDB
@app.route('/api/data', methods=['GET'])
def get_data():
    data = list(collection.find({}, {'_id': 0})) 
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
