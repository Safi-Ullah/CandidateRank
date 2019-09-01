from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated

from .models import Job
from .serializers import JobSerializer
from .permissions import HasListJobsPermission


class JobsListView(generics.ListAPIView):
    """
    Api view to retrieve all jobs in order of their creation.
    """
    permission_classes = (HasListJobsPermission, IsAuthenticated)
    serializer_class = JobSerializer
    queryset = Job.objects.all().order_by('-created_at')
