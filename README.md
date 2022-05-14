# learn-animal-mern-project

## Learn Animals web application is designed and developed by Aaron Lin for his beloved children to learn more about animals, and for demonstration purpose as well.

This is a MERN full-stack serverless web application, including React front-end application, and Node Express serverless back-end using AWS Lambda function. We use Mongoose to work with the NoSQL database - MongoDB Atlas which stores user data, animal data and subscription emails.

The React front-end is deployed on AWS S3, please find the link below:

http://learn-animal-mern-project-aaron.s3-website-ap-southeast-2.amazonaws.com

We previously use AWS Elastic Beanstalk to host the whole MERN application , please find the link below as well:

http://learnanimalmern-env.eba-mn3hxtuv.ap-southeast-2.elasticbeanstalk.com

## Front-end

- For the React front-end application, we use function components to create independent, resuable UI pieces, and React-Router-dom to perform the browser router.
- Used Redux and Redux Tookit to manage the global state of the application.
- We created a custom hook useFetch to fetch the data from the server via REST API using Axios, and a custom hook for utility functions.
- Used Eslint with Airbnb Style Guide to keep the consistency of the code style.

## Back-end

- We developed a node.js Restful API using Express framework so the front-end web application can subscribe emails, sign up / login user, and fetch animal data (both public and premium).
- We use Mongoose to handle the MongoDB interaction.
- We also use Bcrypt to encrypt the password stored in the MongoDB, and JWT for user authentication.
- We created middleware to authenticate the user, get the user details after authentication, and log request information.

## Deploy

We previously use AWS Elastic Beanstalk which is the PaaS to host the whole MERN application, and use CodePipeline to link the Github. 
Now we refactor the code to take the advantage of server-less architecture. We deploy front-end React SPA on AWS S3, and deploy backend API on AWS Lambda using Serverless Framework. AWS takes care of underlying infrastructure, automatically handles the details of capacity provisioning, load balancing, scaling, and application health monitoring.

## Run the application locally
To run the application locally, clone the repo and install the dependencies:
```console
$ git https://github.com/Aaron-Lin-74/learn-animal-mern-project.git
$ cd learn-animal-mern-project
```
Install the dependencies for both server side and client side.
```console
$ cd server
$ npm install
$ cd ../client
$ npm install
```
Run the server and client side application.
```console
$ cd server
$ npm start
$ cd ../client
$ npm start
```
Since the application used MongoDB Altas as the database, you might need to create your own MongoDB Altas account and create a .env file for secrets as well as tokens for JWT. 
Please use the live demo instead.

## License

  [MIT](LICENSE)
