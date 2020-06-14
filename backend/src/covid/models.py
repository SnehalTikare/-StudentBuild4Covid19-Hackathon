from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Post(models.Model):
    title=models.CharField(max_length=100)
    description = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    def __str__(self):
        return self.title

class Register(models.Model):
    first_name = models.CharField(max_length = 200)
    last_name = models.CharField(max_length = 200)
    email = models.EmailField(max_length = 200)
    address = models.CharField(max_length = 200)
    number  = models.IntegerField()
    CHOICES = [('M','Male'),('F','Female'),('N','Not disclose')]
    gender=models.CharField(max_length = 1,choices=CHOICES)
    username = models.CharField(max_length = 50)
    password = models.CharField(max_length=30)
    def __str__(self):
        return self.first_name