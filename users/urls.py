from django.urls import path
from rest_framework.authtoken import views

from .views import UserCreateView

urlpatterns = [
    path('signup/', UserCreateView.as_view(), name='create_user'),
    path('signin/', views.obtain_auth_token)
]
