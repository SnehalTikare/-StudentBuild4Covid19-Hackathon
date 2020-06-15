from django.urls import path
from . import views
#from .views import PostCreateView

urlpatterns = [
    path('',views.registerView,name='mainpage'),
    path('home/',views.home, name = 'homepage'),
    path('about/',views.about, name = 'about'),
    path('home/grocery/',views.grocery,name = 'grocery'),
    path('home/request/',views.history,name = 'request'),
    #path('home/grocery/',PostCreateView.as_view(),name = 'grocery')
]