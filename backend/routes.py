from config import app, db, jsonify
from models import Car

@app.route('/', methods=['GET'])
def index():
  return 'Sistema de cadastro de Carros<br>' +\
    '<a href="/index-cars">Veja os carros cadastrados aqui</a>'


@app.route('/index_cars', methods=['GET'])
def index_cars():
  cars = db.session.query(Car).all()

  json_cars = [_.json() for _ in cars]
  response = jsonify(json_cars)
  response.headers.add("Access-Control-Allow-Origin", "*")

  return response