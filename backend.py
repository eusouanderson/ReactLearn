from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {'message': 'Hello from the backend!'}
    return jsonify(data)

@app.route('/api/submit', methods=['POST'])
def submit_data():
    data = request.get_json()
    # Faça o processamento dos dados recebidos
    response = {'message': 'Data received successfully'}
    return jsonify(response)

if __name__ == '__main__':
    app.run()
