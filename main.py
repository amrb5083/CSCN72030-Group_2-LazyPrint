from models.job import Job
from models.document import Document
from models.printer import Printer
from models.location import Location
from models.customer import Customer
from models.scheduling.fcfs import FCFSJobScheduling
from models.scheduling.priority import PriorityJobScheduling
from models.scheduling.distance_based import DistanceBasedJobScheduling
from models.scheduling.time_based import TimeBasedJobScheduling
from models.scheduling.distance_time_based import DistanceTimeBasedJobScheduling

def main():
    # Sample usage of classes and algorithms
    document1 = Document("Sample Content 1", "PDF", priority=1)
    document2 = Document("Sample Content 2", "Word", priority=2)

    printer1 = Printer(1, Location(37.7749, -122.4194))
    printer2 = Printer(2, Location(34.0522, -118.2437))

    job1 = Job(document1, printer1)
    job2 = Job(document2, printer2)

    # FCFS Scheduling
    fcfs_scheduler = FCFSJobScheduling()
    fcfs_scheduler.schedule_job(job1)
    fcfs_scheduler.schedule_job(job2)

    print("FCFS Scheduling:")
    sorted_fcfs_jobs = fcfs_scheduler.get_sorted_print_jobs()
    for job in sorted_fcfs_jobs:
        print(f"Document Content: {job.document.content}, Printer ID: {job.printer.id}")

    # Priority Scheduling
    priority_scheduler = PriorityJobScheduling()
    priority_scheduler.schedule_job(job1)
    priority_scheduler.schedule_job(job2)

    print("\nPriority Scheduling:")
    sorted_priority_jobs = priority_scheduler.get_sorted_print_jobs()
    for job in sorted_priority_jobs:
        print(f"Document Content: {job.document.content}, Printer ID: {job.printer.id}")

    # Distance-Based Scheduling

    # Assuming user_location is the user's location
    user_location = Location(38.9072, -77.0370)

    distance_scheduler = DistanceBasedJobScheduling()
    distance_scheduler.schedule_job(job1)
    distance_scheduler.schedule_job(job2)

    print("\nDistance-Based Scheduling:")
    sorted_distance_jobs = distance_scheduler.get_sorted_print_jobs(user_location)
    for job in sorted_distance_jobs:
        print(f"Document Content: {job.document.content}, Printer ID: {job.printer.id}")

    # Time-Based Scheduling
    time_scheduler = TimeBasedJobScheduling()
    time_scheduler.schedule_job(job1)
    time_scheduler.schedule_job(job2)

    print("\nTime-Based Scheduling:")
    sorted_time_jobs = time_scheduler.get_sorted_print_jobs()
    for job in sorted_time_jobs:
        print(f"Document Content: {job.document.content}, Printer ID: {job.printer.id}")

    # Distance-Time-Based Scheduling
    distance_time_scheduler = DistanceTimeBasedJobScheduling()
    distance_time_scheduler.schedule_job(job1)
    distance_time_scheduler.schedule_job(job2)

    print("\nDistance-Time-Based Scheduling:")
    sorted_distance_time_jobs = distance_time_scheduler.get_sorted_print_jobs()
    for job in sorted_distance_time_jobs:
        print(f"Document Content: {job.document.content}, Printer ID: {job.printer.id}")

if __name__ == "__main__":
    main()
