import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import Header from '../components/Header';
import '../stylesheets/projects.css';
import projectsData from './projectsData';

export default function Projects() {
    return(
        <div className='project-list'>
        <div className='container' id="project-list">
        <h2 className="d-flex align-items-center justify-content-center px-3 py-5" data-aos="fade-right">Projects</h2>
             <hr/>
             <div>
{projectsData.map(project =>{
    return<div className='row py-5'>
       <div className='col-md-6'>
       <div className='position-relative project'>
            <img src={project.image} alt=""/>
            <div className='project-content'>
                <button className='primary-button mx-2'><a id="myLink" href={project.link} target="_blank">DEMO</a></button>
                <button className='primary-button'><a id="myLink" href={project.frontend} target="_blank">Github Frontend</a></button>
                <button className='primary-button mx-2'><a id="myLink" href={project.backend} target="_blank">Github Backend</a></button>
            </div>
        </div>
           </div>
           <div className='col-md-6 project-desc'>
           <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className='row py-5 project-tech'>
                {project.tech.map(tech =>{
                    return (
                        <div className='col-sm-3 screen-width'>
                            <div className='tech-border'>
                        <img src={tech.image}/>
                        <p>{tech.name}</p>
                        </div>
                        </div>
                    )
                })}
</div>               
           </div>
    </div>
})}
             </div>
        </div>
      
        </div>
    );
}