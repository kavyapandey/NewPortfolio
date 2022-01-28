import React, {useState} from 'react';
import {MdMenuOpen} from 'react-icons/md';
import {MdClose} from 'react-icons/md';
import '../stylesheets/header-footer.css';
export default function Header() {
    const[showHeader,setShowHeader]= useState(false);
    const path = window.location.pathname;
    return(<div className='Header'>
        {showHeader ? ( <MdClose onClick={()=>setShowHeader(!showHeader)} className='menu-icon position-fixed top-0 end-0'/>)
        :( <MdMenuOpen onClick={()=>setShowHeader(!showHeader)} className='menu-icon position-fixed top-0 end-0'/>)}
        <ul className={`${showHeader ? 'show-header' : 'hide-header'} n-box1`}>
            <li className={`${path=='/' && 'active'}`}><a href="#home">Home</a></li>
            <li className={`${path=='/about' && 'active'}`}><a href="#about">About</a></li>
            <li className={`${path=='/projects' && 'active'}`}><a href="#project-list">Projects</a></li>
           
            <li className={`${path=='/contact' && 'active'}`}><a href="#contact">Contact</a></li>
        </ul>
    
    </div>);
}
