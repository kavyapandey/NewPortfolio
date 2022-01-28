import React from 'react';
import {FaBootstrap, FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaReact} from 'react-icons/fa';
import {SiMongodb} from'react-icons/si';
export default function Skills(){
    return(
        <div id="skills"  className="skills">
   <div>
       <div className='container'>
       <h2 className="d-flex align-items-center justify-content-center px-3 py-5" data-aos="fade-right">Professional Skillset</h2>
           <div className='row'>
           <div className='col-sm-2 skills-icons' data-aos="fade-right"><img style={{width:'80px'}} src='./c-programming.svg'/></div>
           <div className='col-sm-2 skills-icons' data-aos="fade-right"><img style={{width:'80px'}} src='./cplus.svg'/></div>
           <div className='col-sm-2 skills-icons' data-aos="fade-left"><span><FaJsSquare size={80} color="#ffffff"/></span></div>
           <div className='col-sm-2 skills-icons ' data-aos="fade-right"><span><FaReact size={80} color="#ffffff"/></span></div>
           <div className='col-sm-2 skills-icons' data-aos="fade-left"><span><FaNodeJs size={80} color="#ffffff"/></span></div>
           </div>
       <div className='row'>
       <div className='col-sm-2 skills-icons' data-aos="fade-right"><span><SiMongodb size={80} color="#ffffff"/></span></div>
        <div className='col-sm-2 skills-icons' data-aos="fade-left"><span><FaHtml5 size={80} color="#ffffff"/></span></div>
        <div className='col-sm-2 skills-icons' data-aos="fade-right"><span><FaCss3Alt size={80} color="#ffffff"/></span></div>
        <div className='col-sm-2 skills-icons' data-aos="fade-left"><span><FaBootstrap size={80} color="#ffffff"/></span></div>
       </div>
       </div>
        </div>
        </div>

    );
}