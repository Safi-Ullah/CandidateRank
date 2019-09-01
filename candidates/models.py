from django.contrib.auth.models import User
from django.db import models

from jobs.models import Job


class Candidate(models.Model):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    @property
    def full_name(self):
        return '{} {}'.format(self.first_name, self.last_name)

    def __str__(self):
        return self.full_name


class CandidateTestScore(models.Model):
    candidate = models.ForeignKey(Candidate, related_name='test_scores', on_delete=models.CASCADE)
    logic_test_score = models.IntegerField(null=True, blank=True)
    job = models.ForeignKey(Job, related_name='candidates', on_delete=models.CASCADE, null=True)
