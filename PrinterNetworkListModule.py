class PrinterNetwork:
    def __init__(self, printerName, printerLatitude, printerLongitude, printerIPAddress, printerID):
        self.printerName = printerName
        self.printerLatitude = float(printerLatitude)
        self.printerLongitude = float(printerLongitude)
        self.printerIPAddress = printerIPAddress
        self.printerID = printerID

def file_io_mgmt(printer_list, filename):
    with open(filename, 'w') as file:
        for printer in printer_list:
            file.write(f"{printer.printerName},{printer.printerLatitude},{printer.printerLongitude},{printer.printerIPAddress},{printer.printerID}\n")

# Sample data.
printer_list = [
    PrinterNetwork(printerName="Printer1", printerLatitude=40.7128, printerLongitude=-74.0060, printerIPAddress="192.168.1.2", printerID=1),
    PrinterNetwork(printerName="Printer2", printerLatitude=34.0522, printerLongitude=-118.2437, printerIPAddress="192.168.1.3", printerID=2),
    PrinterNetwork(printerName="Printer3", printerLatitude=51.5074, printerLongitude=-0.1278, printerIPAddress="192.168.1.4", printerID=3),
]



file_io_mgmt(printer_list, 'printer_list.txt')
