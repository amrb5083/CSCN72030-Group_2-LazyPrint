from models.job_scheduling import JobScheduling

class FCFSJobScheduling(JobScheduling):
    def __init__(self):
        self.print_jobs = []

    def schedule_job(self, job):
        self.print_jobs.append(job)

    def sort_print_jobs(self):
        # For FCFS, no specific sorting is required as it's first-come-first-serve
        pass

    def get_sorted_print_jobs(self):
        self.sort_print_jobs()
        return self.print_jobs
