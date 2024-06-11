import { useEffect, useState } from 'react'

import WashU from '../../assets/images/logo2.png';
import oSTEM from '../../assets/images/logo1.png';
import Reverb from '../../assets/images/logo4.png';
import VS from '../../assets/images/logo3.png';
import o4u from '../../assets/images/logl5.png';
import google from '../../assets/images/logo6.png';

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15} />
            
            </h1>
          <p className="black-text">
           I am a third-year student at Washington University in St. Louis, 
           pursuing a Bachelor of Science in Computer Science and Mathematics 
           in the McKelvey School of Engineering, with a minor in Marketing. 
           My passions lie in software development, community service, and gaining 
           diverse internship experience within the realms of programming and social media management.
          </p>
          <p align="LEFT">
            I take pride in my ability to seamlessly integrate my hobbies and 
            passions into my work by actively engaging in relevant organizations, 
            classes, and connecting with individuals who share my interests.
          </p>
          <p align="LEFT">
           I take great pleasure in expanding my professional repertoire while embracing
           the diversity of my identity. Serving as the president of WashU's oSTEM
            chapter and as a Campus Ambassador for Out for Undergrad's Engineering 
            Conference, I've honed my leadership skills and embraced my community. 
            With this breadth of professional experience, I'm privleged to contribute to WashU's 
            engineering school in planning celebrations, and speaker events for Pride Month.
          </p>
          <p  align="LEFT">
           I apply many of my recognized leadership skills to my passion for music! Alongside being 
           the group coordinator of WashU's premier all-gender community service a cappella 
           group, Reverb, I also hold the position of president on the A Cappella Advisory 
           Council, which oversees all thirteen a cappella groups on campus. 
           These roles allow me to apply my logistical skillset in organizing 
           campus-wide events, including concerts, showcases, and audition cycles.
          </p>
          <p className="black-text">
            I am always learning new ways to apply my breadth of code to making the 
            world a better place. As a quick learner, I always love exploring new 
            software applications and making them the best they can be.
          </p>
        </div> 

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={WashU} alt="WashU Logo" />
            </div>
            <div className="face2">
              <img src={oSTEM} alt="oSTEM Logo" />
            </div>
            <div className="face3">
              <img src={Reverb} alt="Reverb Logo" />
            </div>
            <div className="face4">
              <img src={VS} alt="vscode Logo" />
            </div>
            <div className="face5">
              <img src={o4u} alt="o4u Logo" />
            </div>
            <div className="face6">
              <img src={google} alt="google Logo" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-grid-pulse" />
    </>
  );
};

export default About;

