from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Candidate, CandidateTestScore
from jobs.models import Job
from jobs.serializers import JobSerializer


class CandidateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Candidate
        fields = ('id', 'email', 'first_name', 'last_name', 'full_name')


class CandidateTestScoreSerializer(serializers.ModelSerializer):
    candidate = CandidateSerializer()
    job = JobSerializer()

    class Meta:
        model = CandidateTestScore
        fields = ('candidate', 'logic_test_score', 'job')

    def create(self, validated_data):
        candidate_data = validated_data.pop('candidate')
        candidate, _ = Candidate.objects.get_or_create(**candidate_data)

        job_data = validated_data.pop('job')
        job, _ = Job.objects.get_or_create(**job_data)

        return CandidateTestScore.objects.create(**validated_data, job=job, candidate=candidate)
