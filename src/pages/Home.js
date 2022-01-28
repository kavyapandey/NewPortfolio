import React from 'react';
import Header from '../components/Header';
import '../stylesheets/home.css';
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

export default function Home() {
    return(
        <div>
            <Header/>
            
          <div className='row introduction'>
              <div className='col-sm-6 d-flex align-items-center justify-content-center'>
                 
                  <div className='px-5 py-5'>
                  <h1>Hello.</h1>
                  <h3>I'm</h3>
                  <h2 data-aos="fade-up">Kavya Pandey</h2>
                      <p>A creative full stack javascript developer <br></br>with 3+ years of professional experience, based in Hyderabad and an individual
                     eager to learn and explore new fields of life and technology with good adaptibility and fast learning abilities.</p>
                      <div className='d-flex justify-content-between px-1 homeIcon-content'>
                     <a href="https://www.instagram.com/kavya.pandey/"> <FaInstagram className='footer-icons'/></a>
                        <a href="mailto:pandeykavya2@gmail.com"> <FaMailBulk className='footer-icons'/></a>
                        <a href="https://www.linkedin.com/in/kavya-pandey-8194b1135"><FaLinkedin className='footer-icons'/></a>
                        <a href="https://github.com/kavyapandey"> <FaGithub className='footer-icons'/></a>
                       
                     </div>
                     <br></br>
                      <button className='primary-button font-bold'><a href="#about">KNOW MORE</a></button>
                      <button className='resume-button font-bold'><a href="#carousel">RESUME</a></button>
                  </div>
              </div>
              <div  className='col-sm-6 d-flex align-items-center justify-content-center'>
             <img className='introduction padding-25 width-260' src='./girlwithobjects.svg'></img>
              </div>
          </div>
       <About/>
       <Skills/>
       <Projects/>
       <Contact/>
      
        </div>
    );
}