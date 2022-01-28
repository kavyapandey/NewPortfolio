import React from 'react';
import {BiCaretRight} from 'react-icons/bi';
export default function About(){
    return(
        <div id="about" className='about'>
            <div className="container">
                <div className='row py-5'>
<div className='col-sm-4 py-5'>
<img className="about-img dispNone" data-aos="fade-up" src="./aboutPage.svg" alt=""/>
</div>
<div className='col-sm-8 px-3 py-5'>
    <div className=' px-3 py-5 about-info' style={{height:'fit-content'}}>
        <h2 className="py-1" data-aos="fade-right">About Me</h2>
    <p>I graduated from Graphic Era University, Dehradun with a BTech degree in Information Technology. 
        I have worked as a Project Engineer in development of web applications in Wipro Technologies.</p>
        <p>Apart from technology, i enjoy cooking and love creating new things on my canvas.</p>
        <p>I define myself by the work i want to do. Skills can be taught, personality is inherent. I prefer to keep 
            learning, taking up challenges and do interesting things.
        </p>
        <p>I am looking forward to gain competancy and exposure in web development.</p>
    </div>

</div>
                </div>
</div>
        </div>
    );
}