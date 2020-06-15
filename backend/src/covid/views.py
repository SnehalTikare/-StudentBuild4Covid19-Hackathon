from django.shortcuts import render,redirect
from django.http import HttpResponse
from .forms import RegisterForm
from .models import Post
from django.contrib import messages
from django.contrib.auth.models import User, auth
from django.views.generic import CreateView

# class PostCreateView(CreateView):
#     model = Post
#     template_name = 'covid/home/grocery.html'
#     fields = ['title','description']

def history(request):
    return render(request,'request.html')

def grocery(request):
    if request.method == 'POST':
        title = request.POST['title']
        description = request.POST['description']
        post = Post(title=title,description=description,user=request.user)
        post.save()
        messages.success(request,'Request created successfully')
        return redirect('homepage')
    return render(request,'grocery.html')

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
