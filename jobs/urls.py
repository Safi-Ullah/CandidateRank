from django.urls import path

from .views import JobsListView

urlpatterns = [
    path(r'list/', JobsListView.as_view(), name='jobs_list'),
]