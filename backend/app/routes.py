from flask import Blueprint, jsonify, request
from .services.weather_service import get_weather_data
from .services.nasa_service import get_nasa_image

api_bp = Blueprint('api', __name__)

@api_bp.route('/weather', methods=['GET'])
def weather():
    city = request.args.get('city')
    data = get_weather_data(city)
    return jsonify(data)

@api_bp.route('/nasa-image', methods=['GET'])
def nasa_image():
    data = get_nasa_image()
    return jsonify(data)
