from django.shortcuts import render,redirect
from django.http import HttpResponse
from .forms import RegisterForm
from .models import Post
from django.contrib import messages
from django.contrib.auth.models import User, auth

def home(request):
    context ={
        'posts' : Post.objects.all()
    }
    return render(request, 'home.html',context)
    #return  HttpResponse('<h1> Home page </h1> ')
def about(request):
    return render(request, 'about.html',{'title':'About'})
# Create your views here.
# def contact(request):
#     if request.method == "POST":
#         form = RegisterForm(request.POST)
#         if form.is_valid():
#             first_name = form.cleaned_data['first_name']
#             last_name = form.cleaned_data['last_name']
#             email = form.cleaned_data['email']
#             address = form.cleaned_data['address']
#             number = form.cleaned_data['number']
#             gender = form.cleaned_data['gender']
#             username = form.cleaned_data['username']
#             password = form.cleaned_data['password']
            
             
#     form = RegisterForm()
#     return render(request,'form.html',{'form': form})

def registerView(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            messages.success(request,'Account created successfully')
            form.save()
            return redirect('login')
            # first_name = form.cleaned_data['first_name']s
            # last_name = form.cleaned_data['last_name']
            # email = form.cleaned_data['email']
            # address = form.cleaned_data['address']
            # number = form.cleaned_data['number']
            # gender = form.cleaned_data['gender']
            # username = form.cleaned_data['username']
            # password = form.cleaned_data['password']
            
             
    form = RegisterForm()
    return render(request,'form.html',{'form': form})
