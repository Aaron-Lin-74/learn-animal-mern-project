# learn-animal-mern-project backend

## Learn Animals web application is designed and developed by Aaron Lin for his beloved children to learn more about animals, and for demonstration purpose as well.

The highly available and scalable RestAPI is implemented using Node.js, Express, Mongoose, JWT and deployed on AWS Lambda. The NoSQL MongoDB Atlas stores user data, animal data and subscription emails.

The end point for the backend API is as below:

https://fzbvp5o7wd.execute-api.ap-southeast-2.amazonaws.com

## Run the application locally
To run the application locally, clone the repo and install the dependencies:
```console
$ git https://github.com/Aaron-Lin-74/learn-animal-mern-project.git
$ cd learn-animal-mern-project
```
Install the dependencies for server side.
```console
$ cd server
$ npm install
```
Run the server side application.
```console
$ npm start
```
Since the application used MongoDB Altas as the database, you might need to create your own MongoDB Altas account and create a .env file for secrets as well as tokens for JWT. 
Please use the live demo instead.

## License

  [MIT](LICENSE)
