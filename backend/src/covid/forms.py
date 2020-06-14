from django import forms
from .models import Register

# class RegisterForm(forms.Form):
#     first_name = forms.CharField(max_length = 200)
#     last_name = forms.CharField(max_length = 200)
#     email = forms.EmailField(max_length = 200)
#     address = forms.CharField(widget = forms.Textarea)
#     number  = forms.IntegerField()
#     CHOICES = [('M','Male'),('F','Female')]
#     gender=forms.CharField(label='Gender', widget=forms.RadioSelect(choices=CHOICES))
#     username = forms.CharField(max_length = 50)
#     password = forms.CharField(max_length=30, widget = forms.PasswordInput)


class RegisterForm(forms.ModelForm):
    password = forms.CharField(max_length=30, widget = forms.PasswordInput)
    class Meta:
        model = Register
        fields = ['first_name','last_name','email','address','number','gender','username','password']