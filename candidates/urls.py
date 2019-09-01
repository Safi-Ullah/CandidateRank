from django.urls import path

from .views import CandidateListView

urlpatterns = [
    path(r'list/', CandidateListView.as_view(), name='candidates_list'),
]