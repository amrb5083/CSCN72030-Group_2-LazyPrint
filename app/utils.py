# app/utils.py

#imports:
# from geopy.geocoders import Nominatim
from geopy.distance import geodesic
from array import array
import pandas as pd

def get_location_from_postal_code(postal_code, postal_code_data):
    location_data = postal_code_data[postal_code_data['postal_code'] == postal_code]

    if not location_data.empty:
        latitude = location_data['latitude'].values[0]
        longitude = location_data['longitude'].values[0]
        return latitude, longitude
    else:
        return None

def calculate_distance(location1, location2):
    return geodesic(location1, location2).kilometers

class printer:
    def __init__(self, efficiency, queue, longitude, latitude, id, name, brand, price, code):
        self.efficiency = int(efficiency)
        self.queue = int(queue)
        self.longitude = float(longitude)
        self.latitude = float(latitude)
        self.id = int(id)
        self.name = name
        self.brand = brand
        self.price = int(price)
        self.code = code

# Latitude and longitude stored in independent arrays:
latitudes = [43.475418, 43.470686, 43.477413, 43.479502, 43.47536, 43.479306, 43.479339, 43.474152, 43.462591, 43.459994]
longitudes = [-80.518307, -80.512582, -80.520473, -80.514984, -80.523652, -80.521778, -80.518488, -80.534642, -80.53839, -80.546254]

# Printer components stored in printer component arrays:
printers_array = [
    printer(90, 0, longitudes[0], latitudes[0], 1, "LaserJet", "Hewlett-Packard", 500, "ABC123"),
    printer(80, 0, longitudes[1], latitudes[1], 2, "DeskJet", "Hewlett-Packard", 600, "DEF456"),
    printer(85, 0, longitudes[2], latitudes[2], 3, "EcoTank 1", "EPSON", 550, "GHI789"),
    printer(92, 0, longitudes[3], latitudes[3], 4, "EcoTank 2", "EPSON", 530, "JKL012"),
    printer(88, 0, longitudes[4], latitudes[4], 5, "Monochrome 1", "Brother", 520, "MNO345"),
    printer(95, 0, longitudes[5], latitudes[5], 6, "Monochrome 2", "Brother", 570, "PQR678"),
    printer(78, 0, longitudes[6], latitudes[6], 7, "Pixma 1", "Cannon", 590, "STU901"),
    printer(89, 0, longitudes[7], latitudes[7], 8, "Pixma 2", "Cannon", 510, "VWX234"),
    printer(93, 0, longitudes[8], latitudes[8], 9, "DeskJet 2", "Hewlett-Packard", 540, "YZA567"),
    printer(82, 0, longitudes[9], latitudes[9], 10, "EcoTank 3", "EPSON", 560, "BCD890")
]


def distance_based_sort(user_location, printers):
    printers.sort(key=lambda printer: calculate_distance(user_location, (printer.longitude, printer.latitude)))
    return printers


def queue_based_sort(printers):
    printers.sort(key=lambda printer: printer.queue)
    return printers

def alphabetical_sort(printers):
    printers.sort(key=lambda printer: printer.name)
    return printers

def time_based_sort(printers):
    printers.sort(key=lambda printer: printer.efficiency * printer.queue)
    return printers

def distance_time_optimized_sort(user_location, printers):
    printers.sort(key=lambda printer: calculate_distance(user_location, (printer.longitude, printer.latitude)) + printer.efficiency * printer.queue)
    return printers
