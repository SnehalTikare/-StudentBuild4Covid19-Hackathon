from django.shortcuts import render
from django.http import HttpResponse
from .forms import RegisterForm

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
            print("valid")
            form.save()
            # first_name = form.cleaned_data['first_name']
            # last_name = form.cleaned_data['last_name']
            # email = form.cleaned_data['email']
            # address = form.cleaned_data['address']
            # number = form.cleaned_data['number']
            # gender = form.cleaned_data['gender']
            # username = form.cleaned_data['username']
            # password = form.cleaned_data['password']
            
             
    form = RegisterForm()
    return render(request,'form.html',{'form': form})