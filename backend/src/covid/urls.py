from django.urls import path
from . import views

urlpatterns = [
    path('',views.registerView,name='mainpage'),
    path('home/',views.home, name = 'homepage'),
    path('about/',views.about, name = 'about')
]