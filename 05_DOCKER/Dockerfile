# FROM keywork must be always the first
FROM debian:stable
RUN apt-get update && apt-get instal -y --force-yes apache2
EXPOSE 80 443
VOLUME ["/var/www", "/var/log/apache2", "/etc/apache2"]
ENTRYPOINT ["/user/sbin/apache2ctl", "-D", "FOREGROUND"]
