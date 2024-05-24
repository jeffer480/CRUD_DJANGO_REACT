from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tasks import views as task_views  # Alias para evitar conflictos de nombres
from .views import UserViewSet

# Configuración del router para tareas
task_router = routers.DefaultRouter()
task_router.register(r'tasks', task_views.TaskView, 'tasks')

# Configuración del router para usuarios
user_router = routers.DefaultRouter()
user_router.register(r'users', UserViewSet)

urlpatterns = [
    path("api/v1/", include(task_router.urls)),  # URLs para tareas
    path("api/v2/", include(user_router.urls)),  # URLs para usuarios
    path('docs/', include_docs_urls(title='Task API Documentación')),
]