from django.views.generic import TemplateView

class HomeView(TemplateView):
    template_name = "main/index.html"

class ProjectsView(TemplateView):
    template_name = "main/projects.html"