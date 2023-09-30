

FROM node:13.12.0-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
COPY . ./
# Copy the .env file into the container
#COPY .env .env
# Build the React app with minification
RUN npm run build

CMD ["npm", "start"]
