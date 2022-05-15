# Build
FROM node:14.17.4 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm build


# Serve static site
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist/fluxfolio /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]