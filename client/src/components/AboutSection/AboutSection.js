import React from 'react'
import './AboutSection.scss'

const AboutSection = () => {
  return (
    <section className='about-section'>
      <div className='about-container'>
        <h1 className='section-title'>About Us</h1>

        <p>
          Learn Animals web application is developed by Aaron Lin for his
          beloved children to learn more about animals, and for demonstration
          purpose as well.
        </p>
        <p>
          This is a MERN full-stack web application, including React based
          front-end application, and Node Express back-end server application.
          We use Mongoose to work with the NoSQL database - MongoDB Atlas which
          stores user data, animal data and subscription emails.
        </p>

        <h3 className='text-center'>Front-end</h3>
        <p>
          For the React front-end application, we use React-Router-dom to
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
          request, response data.
        </p>

        {/* <h3 className='text-center'>Deploy</h3>
        <p>
          For deployment, we use AWS LightSail to host our full-stack web
          application. We use nginx as reverse-proxy, and PM2 to manage the
          application to keep it alive 24/7.
        </p> */}
      </div>
    </section>
  )
}

export default AboutSection
