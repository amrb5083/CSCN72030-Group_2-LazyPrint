from models.job_scheduling import JobScheduling
from models.location import calculate_distance

class DistanceBasedJobScheduling(JobScheduling):
    def __init__(self):
        self.print_jobs = []

    def schedule_job(self, job):
        self.print_jobs.append(job)

    def sort_print_jobs(self, user_location):
        # Sort jobs based on distance from the user's location
        self.print_jobs.sort(key=lambda x: calculate_distance(user_location, x.printer.location))

    def get_sorted_print_jobs(self, user_location):
        self.sort_print_jobs(user_location)
        return self.print_jobs
