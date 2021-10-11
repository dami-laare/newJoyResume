from django.urls import path
from . import views  

app_name = "main"

urlpatterns = [
    path('', views.HomeView.as_view(), name='index'),
    # path('<str:about_me>', views.HomeView.as_view(), name='abo'),
    path('projects/', views.ProjectsView.as_view(), name='projects'),
    
]