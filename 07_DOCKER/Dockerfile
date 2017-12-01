# base image
FROM ubuntu:latest

# commands to run to install dependencies
RUN apt-get update -y
RUN apt-get install -y python3

# When you pass commands to the container, what should interpret them
ENTRYPOINT ["python3"]

# command to run when the container starts
CMD ["app.py"]

# Working directory
WORKDIR /app

# copy apps from the local folder to the Docker container
COPY app.py app.py
COPY alternate.py alternate.py
RUN ls

# Make port available
EXPOSE 8080
