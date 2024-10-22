from flask import Blueprint, jsonify, current_app

api = Blueprint('api', __name__)

@api.route('/data', methods=['GET'])
def get_data():
    mongo = current_app.config['mongo']
    data = mongo.db.mycollection.find()
  
    print(f"Number of documents found: {data.count()}")
    
    output = []
    for document in data:
        output.append(document)
    
    return jsonify(output)
