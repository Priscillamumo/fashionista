
import React, { useState } from 'react';
import './about.css';
import photoi from './2.jpeg';


const About = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can implement your newsletter subscription logic here
    // For this example, we'll just set the 'subscribed' state to true
    setSubscribed(true);
  };

  return (
    <div>
    <h2>About us</h2>


    <div className='Container'>

    <div  className='paragra'>  
      <p>
      This is your go-to destination for all things fashion. We are passionate about
        bringing you the latest trends, outfit ideas, and style inspiration to help you express your
        unique personality through fashion.
      </p>
      <p>
        Our journey in the world of fashion began with a simple desire - to share our love for fashion
        and help others discover their own sense of style. At ClassieCurator, we believe that
        fashion is not just about following trends; it's about embracing individuality and celebrating
        diversity.
      </p>
      <h3>Mission </h3>
      <p>
        Our mission is to empower and inspire our readers to feel confident and beautiful in their own
        skin. We aim to create a positive and inclusive fashion community where everyone feels welcome
        and encouraged to express themselves through their personal style.
      </p>
      <p>
        Our team consists of fashion enthusiasts with a keen eye for style. With years of experience
        in the fashion industry, we are committed to curating content that resonates with our readers
        and helps them stay ahead in the fashion game.
      </p>
      <p>
      ClassieCurator covers a wide range of topics, from sustainable fashion to budget-friendly
        outfit ideas. We believe that fashion should be accessible to all, and we are dedicated to
        bringing you the best of the fashion world without breaking the bank.
      </p>
      <p>
        We value the relationship we have with our readers and the vibrant fashion community that
        surrounds us. Your feedback, comments, and suggestions drive us to improve and deliver content
        that truly matters to you.
      </p>
      <h3>Subscribe  </h3>
      <p>
        Subscribe to our newsletter to stay updated with the latest fashion trends, exclusive offers,
        and exciting giveaways! Be a part of our fashion community and let's embark on this stylish
        journey together.
      </p>

      {subscribed ? (
        <p>Thank you for subscribing to our newsletter!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Subscribe to our newsletter:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Enter your email address"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      )}

     
    </div>

      <div>
        <img src={photoi} alt ='photii'/>
    
      </div>
    </div>
    </div>
  );
};

export default About;