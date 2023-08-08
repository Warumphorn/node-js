# Install dependencies only when needed
FROM node:18-alpine
RUN mkdir -p /app
WORKDIR /app

# ENV MONGO_DB_USERNAME=admin MONGO_DB_PWD=password

# Install dependencies based on the preferred package manager
COPY package*.json /app

RUN npm install

COPY . /app

# Exposing the Application Port
EXPOSE 5000

CMD ["npm", "run", "dev"]