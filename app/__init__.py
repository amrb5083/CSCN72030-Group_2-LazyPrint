# app/__init__.py
from flask import Flask
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})  # Adjust the origin to match your frontend URL

from app import routes