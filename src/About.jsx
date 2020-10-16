import React from 'react';
import image from '../src/images/image.gif';
import {NavLink} from 'react-router-dom';
import Common from './Common';
const About=()=>{
   return(
   <>
   <Common name="welcome to about page" imgsrc={image} visit='/contact' btnname='Contact Now'/>
    </>
 )}
export default About;