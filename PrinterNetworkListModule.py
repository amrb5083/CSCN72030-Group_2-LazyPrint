class PrinterNetwork:
    def __init__(self, printerName, printerIPAddress, printerID):
        self.printerName = printerName
        self.printerLatitude = float(printerLatitude)
        self.printerLongitude = float(printerLongitude)
        self.printerIPAddress = printerIPAddress
        self.printerID = printerID

## Return list of printers with matching IP address.
def printerMapper(printer_list):
    matching_printers = []

    for printer in printer_list:
        # Split the IP addresses into network and host portions
        printer_network = '.'.join(printer.printerIPAddress.split('.')[:3])
        target_network = '.'.join(target_network.split('.')[:3])

        # Compare only the network portion
        if printer_network == target_network:
            matching_printers.append(printer)

    return matching_printers


##def schedule_print_job(selected_printer):
 ##   selected_printer_id = int(input("Choose a printer by entering its ID: "))

    # Find the selected printer by ID
 ##   selected_printer = next((printer for printer in printer_list if printer.printerID == selected_printer_id), None)

   ## if selected_printer:
        # Placeholder for the actual logic to schedule a print job
      ##  print(f"Print job scheduled for {selected_printer.printerName} (ID: {selected_printer.printerID}) with IP {selected_printer.printerIPAddress}")
    ##else:
       ## print("Invalid printer ID. Print job not scheduled.")


# Sample data.
printer_list = [
    PrinterNetwork(printerName="Printer1", printerLatitude=40.7128, printerLongitude=-74.0060, printerIPAddress="192.168.1.2", printerID=1),
    PrinterNetwork(printerName="Printer2", printerLatitude=34.0522, printerLongitude=-118.2437, printerIPAddress="192.168.1.3", printerID=2),
    PrinterNetwork(printerName="Printer3", printerLatitude=51.5074, printerLongitude=-0.1278, printerIPAddress="192.168.1.4", printerID=3),
]
