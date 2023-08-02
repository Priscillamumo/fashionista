import React from 'react';
import './home.css';
import imagee from './1.png';

const Home = () => {
  return (
    <div className='header'>
        <h1 id="head">ClassieCurator  &#x2661;  </h1> 
        <div className='welcome'>
        <div className="content-section">
          <h1>Welcome to ClassieCurator!</h1>
          <p >
             Step into the world of fashion and discover the latest trends, style tips,
             and outfit inspirations. Whether you're a fashionista looking to stay on top
             of the hottest looks or a style novice seeking guidance, we've got you covered.
             Our passion for fashion drives us to curate the best content, featuring everything
             from runway trends to affordable finds, all with a touch of personal flair.
         </p>
         <p>
             Join our fashion community and embark on a journey of self-expression through clothing.
             Get ready to explore the art of dressing up, experiment with new styles, and unlock
             your unique fashion identity. Let's elevate your wardrobe and make every day a runway moment.
             Together, let's embrace the transformative power of fashion!
          </p>
        </div>
        <img src={imagee} alt='fashion'/>
        </div>

    </div>
  )
}

export default Home;