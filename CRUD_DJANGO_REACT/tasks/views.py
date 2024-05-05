from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Create your views here.
# esto funciona para todo el CRUD
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()