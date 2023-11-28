class Job:
    def __init__(self, document, printer):
        self.document = document
        self.printer = printer

    def __repr__(self):
        return f"Job(Document Content: {self.document.content}, Printer ID: {self.printer.id})"
