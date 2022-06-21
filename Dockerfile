# Serve static site
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY ./dist/fluxfolio /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]