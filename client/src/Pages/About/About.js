import React, { useEffect } from 'react'
import { useGlobalContext } from '../../contexts/AppContext'
import './About.scss'

const About = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])

  return (
    <main className='about-page'>
      <article className='about-content'>
        <h1 className='about-title'>About Us</h1>

        <p>
          Learn Animals web application is designed and developed by Aaron Lin
          for his beloved children to learn more about animals, and for
          demonstration purpose as well.
        </p>
        <p>
          This is a MERN full-stack web application, including React based
          front-end application, and Node Express back-end server application.
          We use Mongoose to work with the NoSQL database - MongoDB Atlas which
          stores user data, animal data and subscription emails.
        </p>

        <h3 className='text-center'>Front-end</h3>
        <p>
          For the React front-end application, we use function components to
          create independent, resuable UI pieces, and React-Router-dom to
          perform the browser router. We have two useContext hooks for
          authentication and global context. We created a custom hook useFetch
          to fetch the data from the server via REST API using Axios. We used
          CSS to style most of the components, but start using SASS for the new
          components.
        </p>

        <h3 className='text-center'>Back-end</h3>
        <p>
          We developed a node.js server using Express framework so the front-end
          web application can subscribe emails, sign up / login user, and fetch
          animal data (both public and premium). we use Mongoose to handle the
          MongoDB interaction. We also use Bcrypt to encrypt the password stored
          in the MongoDB, and JWT for user authentication. We created middleware
          to authenticate the user, get the user after authentication, and log
          request information.
        </p>

        <h3 className='text-center'>Deploy</h3>
        <p>
          We use GitHub to host the source code and AWS CodePipeline to link
          GitHub repository and continuously deploy to Elastic Beanstalk which
          is a PaaS offering from AWS. It takes care of underlying
          infrastructure, automatically handles the details of capacity
          provisioning, load balancing, scaling, and application health
          monitoring.
        </p>
      </article>
    </main>
  )
}

export default About
