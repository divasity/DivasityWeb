from django.urls import path
from .views import index

app_name = 'BackEnd'

urlpatterns = [
    path('', index, name='index'),
]
