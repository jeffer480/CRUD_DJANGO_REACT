from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tasks import views

# api versioning
router = routers.DefaultRouter()
#               ruta↓ class de views.py↓ nombre_de_la_ruta↓
router.register(r'tasks', views.TaskView, 'tasks')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title='Task API Documentación'))
]