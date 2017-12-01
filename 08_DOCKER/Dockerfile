FROM ubuntu
WORKDIR /files
COPY host_file.txt image_file.txt
COPY host_file.txt image/path/image_file.txt
COPY host_file.txt /image_file.txt

RUN useradd mauridb
WORKDIR /app
RUN chown mauridb /app
USER mauridb
RUN whoami > whoami.txt
CMD whoami
