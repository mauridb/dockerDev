FROM ubuntu
ENV appDir=/app message="welcome to my docker application"
WORKDIR $appDir
RUN echo $message > README.txt
CMD echo Read ${appDir}/README.txt to understand docker better!
