from django.db import models

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