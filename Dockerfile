FROM node:lts-alpine
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci --silent
COPY . .
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "app.js"]


