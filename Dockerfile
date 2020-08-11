FROM node:14.1-alpine AS builder

WORKDIR /opt/web
RUN apk add yarn
COPY package.json yarn.lock ./
RUN yarn
ENV PATH="./node_modules/.bin:$PATH"
COPY . ./
RUN yarn build

FROM nginx:1.19.1-alpine
COPY --from=builder /opt/web/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]