from models.job_scheduling import JobScheduling

class DistanceBasedJobScheduling(JobScheduling):
    def __init__(self):
        self.print_jobs = []

    def schedule_job(self, job):
        self.print_jobs.append(job)

    def sort_print_jobs(self):
        # Implement sorting based on distance (not specified in this example)
        pass

    def get_sorted_print_jobs(self):
        self.sort_print_jobs()
        return self.print_jobs
