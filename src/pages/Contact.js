import React from "react";
import {GoLocation} from 'react-icons/go';
import {FaGithub,FaLinkedinIn} from 'react-icons/fa';
export default function Contact(){
    return(
        <div id="contact">
            <div className="container contact">
            <h2 className="d-flex align-items-center justify-content-center px-3 py-5" data-aos="fade-right">Contact Me</h2>
<div className="row py-5">
<div className="col-sm-4">
<img className="about-img bounce" data-aos="fade-up" src="./mailbox.svg" alt=""/>
</div>
<div className="col-sm-8">
   
    <div className="row">
        <div className="col-sm-2">
        <span className="contact-icons"><GoLocation/></span>
        </div>
       
        <h4>Uppal, Hyderabad - 500039, Telangana</h4>
        </div>
    <div className="row">
    <div className="col-sm-2">
    <a href="https://www.linkedin.com/in/kavya-pandey-8194b1135" target="_blank"><span className="contact-icons"><FaLinkedinIn/></span></a>
            </div>
          
                       
        <h4>kavya-pandey-8194b1135</h4>
        </div>

    <div className="row">
    <div className="col-sm-2">
    <a href="https://github.com/kavyapandey" target="_blank"><span className="contact-icons"><FaGithub/></span></a> 
            </div>
   
        <h4>kavyapandey</h4>
        </div>



</div>
</div>

            </div>
            <div className="p-40"> <span>Made By Kavya Pandey</span></div>
          
        </div>
    )
}