from models.job_scheduling import JobScheduling

class PriorityJobScheduling(JobScheduling):
    def __init__(self):
        self.print_jobs = []

    def schedule_job(self, job):
        self.print_jobs.append(job)

    def sort_print_jobs(self):
        # Sort jobs based on priority in descending order
        self.print_jobs.sort(key=lambda x: x.document.priority, reverse=True)

    def get_sorted_print_jobs(self):
        self.sort_print_jobs()
        return self.print_jobs
