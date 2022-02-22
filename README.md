# learn-animal-mern-project
## Learn Animals web application is designed and developed by Aaron Lin for his beloved children to learn more about animals, and for demonstration purpose as well.

This is a MERN full-stack web application, including React based front-end application, and Node Express back-end server application. We use Mongoose to work with the NoSQL database - MongoDB Atlas which stores user data, animal data and subscription emails.

## Front-end
   For the React front-end application, we use function components to
          create independent, resuable UI pieces, and React-Router-dom to
          perform the browser router. We have two useContext hooks for
          authentication and global context. We created a custom hook useFetch
          to fetch the data from the server via REST API using Axios. We used
          CSS to style most of the components, and start using SASS for the new
          components.

## Back-end
 We developed a node.js server using Express framework so the front-end
          web application can subscribe emails, sign up / login user, and fetch
          animal data (both public and premium). we use Mongoose to handle the
          MongoDB interaction. We also use Bcrypt to encrypt the password stored
          in the MongoDB, and JWT for user authentication. We created middleware
          to authenticate the user, get the user details after authentication, and log
          request information.
          
## Deploy
We use GitHub to host the source code and AWS CodePipeline to link
          GitHub repository and continuously deploy to Elastic Beanstalk which
          is a PaaS offering from AWS. It takes care of underlying
          infrastructure, automatically handles the details of capacity
          provisioning, load balancing, scaling, and application health
          monitoring.

The live application is hosted using AWS Elastic Beanstalk, please find the link below:

http://learnanimalmern-env.eba-mn3hxtuv.ap-southeast-2.elasticbeanstalk.com/products
