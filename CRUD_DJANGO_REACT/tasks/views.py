from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Create your views here.
# esto funciona para todo el CRUD
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

# ----------------------------para el api de users------------------------------
from django.contrib.auth.models import User
# from rest_framework import viewsets
from .serializer import UserSerializer

from django.contrib.auth import authenticate, login
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=False, methods=['post'])
    def login(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        # Autenticar al usuario
        user = authenticate(username=username, password=password)
        if user is not None:
            # Iniciar sesión
            login(request, user)
            return Response({'message': 'Inicio de sesión exitoso'}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)


