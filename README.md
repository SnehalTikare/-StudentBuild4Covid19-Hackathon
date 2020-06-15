# StudentBuild4Covid19-Hackathon
# Co-Relief

Co-Relief is a platform to connect volunteers to recipients during COVID-19.
Senior citizens are highly affected by the pandemic because of the challenges of mobility and loneliness too. The application would serve to provide emotional support and also provide resources to the recipients.
Some of the users for the application are Volunteers, Distributors, and People in Need. Also, through geospatial locations provided by the users, providing requests, and asking for help is easier. This app will also provide support for local businesses affected by COVID-19 to grow.

## Technologies used

Python django framework
REST API
HTML, CSS, Bootstrap
SQLite

## Installation

Use the package manager pip to install django.

```bash
pip install django
pip install requests
```
Other requests can be seen in the requirements.txt file.
## Usage

```python
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```


## Modules
Login - Takes care of login functionality. The users we are targeting are: volunteers, distributors and need recipients

Register - Takes care of registration functionality for the above mentioned users
 
Logout - Session details are cleared and user details are erased from the current session

Request - Shows requests pool, the requests that have been assigned and resolved requests by the volunteers

About - General page that describes what the project is about

Home - Shows resources that can be requested by recipients
