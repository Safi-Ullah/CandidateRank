from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated

from .models import CandidateTestScore
from .serializers import CandidateTestScoreSerializer
from .permissions import HasListCandidatesPermission


class CandidateListView(generics.ListAPIView):
    """
    Api view to retrieve all candidates against job_id.
    """
    permission_classes = (HasListCandidatesPermission, IsAuthenticated)
    serializer_class = CandidateTestScoreSerializer
    
    def get_queryset(self):
        job_id = self.request.GET.get('job_id')

        return CandidateTestScore.objects.filter(job_id=job_id).order_by('-logic_test_score')
