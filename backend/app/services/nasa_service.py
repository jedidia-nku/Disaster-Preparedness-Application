import requests

API_KEY = 'your_nasa_api_key'

def get_nasa_image():
    url = f'https://api.nasa.gov/planetary/apod?api_key={API_KEY}'
    response = requests.get(url)
    return response.json()
