## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

Need to have node installed for frontend and python for backend.

### Installing

First of all clone the project and move to that directory.

```
git clone https://github.com/Safi-Ullah/CandidateRank.git
cd ./CandidateRank
```

Then make a virtual environment using python 3 and activate it.
FYI, I used python 3.5.2 for this project.

```
virtualenv -p python3 my_env
source my_env/bin/activate
```

Next step is to install modules for backend, run the following command:

```
pip install -r requirements.txt
```

After that run:

```
python manage.py migrate
```
This will create the complete schema.

Next step is to import data from csv file, run the following command:

```
python manage.py import_candidate_data candidates_data.csv
```

After that create a django superuser for using django admin panel:

```
python manage.py createsuperuser
```

Now, everything on backend is setup, go ahead and run the server:

```
python manage.py runserver
```
The server will start on port 8000 by default

You can go to django admin panel via http://localhost:8000/admin/ and login using the superuser credentials created above. You can see all the models populated with data from csv.


#### Now for the frontend:

Move to the frontend folder

```
cd frontend
```

Install node modules

```
npm install
```

After that just start the server

```
npm start
```

Now, go to http://localhost:3000/signup and sign up. But the jobs list won't be retrieved unless you assign this newly created user to the `Hiring Team` group from admin panel.

For that go to http://localhost:8000/admin/auth/user/ and select the user you want to give permission to, and double click on the `Hiring Team` under available groups. Then, save and now when you login via http://localhost:3000/login:

You'll see a list of jobs and candidates against each job ordered in descending order of their score.
