from rest_framework import serializers
from .models import Task

from django.contrib.auth.models import User
# from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'first_name', 'last_name']
        extra_kwargs = {'password': {'write_only': True}}  # Para que el campo de contraseña no se incluya en las respuestas GET



class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # fields = ('id', 'title', 'description', 'done')
        # todos los campos
        fields = '__all__'