# Needed to pass data to front-end in .JSON format.
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Revamped printer class with updated attributes.
class printerList:
    def __init__(self, printerID, printerName, printerBrand, printerPrice, printerCode):
        self.printerID = int(printerID)
        self.printerName = printerName
        self.printerBrand = printerBrand
        self.printerPrice = printerPrice
        self.printerCode = printerCode
        

# Updated sample data.
printer_list = [
    printerList(printerID=1, printerName="LaserJet", printerBrand="HP", printerPrice="$0.23/pg", printerCode="FM04"),
    printerList(printerID=2, printerName="L836 Laser", printerBrand="Brother", printerPrice="$0.56/pg", printerCode="LJ92"),
    printerList(printerID=3, printerName="B&WTX", printerBrand="EPSON", printerPrice="0.08/pg", printerCode="5BW1"),
    printerList(printerID=4, printerName="Pixma", printerBrand="Canon", printerPrice="0.35/pg", printerCode="CPI3"),
    printerList(printerID=5, printerName="Laserjet GQ", printerBrand="HP", printerPrice="$0.21/pg", printerCode="TWX1"),
    printerList(printerID=6, printerName="LZQ24", printerBrand="Canon", printerPrice="$1.00/pg", printerCode="VGTW2"),
    printerList(printerID=7, printerName="InkJet-2023", printerBrand="HP", printerPrice="$1.25/pg", printerCode="AQNX"),
    printerList(printerID=8, printerName="LaserJet-2023", printerBrand="EPSON", printerPrice="$0.45/pg", printerCode="MPR3"),
    printerList(printerID=9, printerName="Pixma-2023", printerBrand="Canon", printerPrice="0.45/pg", printerCode="LPQ1"),
    printerList(printerID=10, printerName="CJ-INK-PLE", printerBrand="Brother", printerPrice="$0.89/pg", printerCode="I91J")
]

# Function for pasrsing data to JSON format for front-end:

def convert_printers_to_dict(printers):
    return [
        {
            "printerID": printer.printerID,
            "printerName": printer.printerName,
            "printerBrand": printer.printerBrand,
            "printerPrice": printer.printerPrice,
            "printerCode": printer.printerCode,
        }
        for printer in printers
    ]


@app.route('/api/printers')
def get_printers():
    return jsonify(convert_printers_to_dict(printer_list))

if __name__ == '__main__':
    app.run(debug=True)
