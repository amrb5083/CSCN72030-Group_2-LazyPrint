from abc import ABC, abstractmethod
from models.job import Job

class JobScheduling(ABC):
    @abstractmethod
    def schedule_job(self, job: Job):
        pass
