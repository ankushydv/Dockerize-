FROM node:latest

WORKDIR src/app

COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]