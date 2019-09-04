FROM nginx:alpine

LABEL maintainer="dbrudnicki <davidbrudnicki@gmail.com>"

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./build /usr/share/nginx/html
