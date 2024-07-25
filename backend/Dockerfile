# Use an official Python runtime as a parent image
FROM python:3.10-slim

# Copy the current directory contents into the container
COPY . /usr/src/app

# Set the working directory in the container
WORKDIR /usr/src/app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Set the working directory in the container
WORKDIR /usr/src/app/my_django_app

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
