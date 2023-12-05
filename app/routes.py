# app/routes.py
from flask import request, jsonify
from app import app
from app.utils import get_location_from_postal_code, calculate_distance, distance_based_sort, queue_based_sort, alphabetical_sort, time_based_sort, distance_time_optimized_sort, printers_array
import pandas as pd

# Load postal code data
postal_code_data = pd.read_excel('data/postal_codes.xlsx')

@app.route('/api/sort_printers', methods=['POST'])
def sort_printers():
    user_postal_code = request.json['postal_code']
    user_location = get_location_from_postal_code(user_postal_code, postal_code_data)
    sorting_method = request.json['sorting_method']

    if sorting_method == 'distance':
        sorted_printers = distance_based_sort(user_location, printers_array)
    elif sorting_method == 'queue':
        sorted_printers = queue_based_sort(printers_array)
    elif sorting_method == 'alphabetical':
        sorted_printers = alphabetical_sort(printers_array)
    elif sorting_method == 'time':
        sorted_printers = time_based_sort(printers_array)
    elif sorting_method == 'distance_time':
        sorted_printers = distance_time_optimized_sort(user_location, printers_array)
    else:
        return jsonify({'error': 'Invalid sorting method'}), 400

    return jsonify({'sorted_printers': [printer.__dict__ for printer in sorted_printers]})

# New route to update printer queue
@app.route('/api/update-queue', methods=['POST'])
def update_queue():
    try:
        data = request.json
        printer_code = data.get('printerCode')

        # Find the printer with the given code in the printers_array
        selected_printer = next((printer for printer in printers_array if printer.code == printer_code), None)

        if selected_printer:
            # Update the queue (you can modify this logic based on your requirements)
            selected_printer.queue += 1

            # Print the updated queue to the console
            print(f"Updated queue for {selected_printer.name}: {selected_printer.queue}")

            return jsonify({'success': True, 'message': 'Printer queue updated successfully'})
        else:
            return jsonify({'success': False, 'error': 'Printer not found'}), 404

    except Exception as e:
        return jsonify({'success': False, 'error': f'Error updating printer queue: {str(e)}'}), 500

    

@app.route('/api/printers', methods=['GET'])
def get_printers():
    try:
        # Assuming printers_array is the list of printers you want to send
        printers_data = [printer.__dict__ for printer in printers_array]
        return jsonify({'printers': printers_data})
    except Exception as e:
        return jsonify({'error': f'Error fetching printers: {str(e)}'}), 500