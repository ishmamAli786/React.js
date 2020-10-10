import React from 'react';
import image from '../src/images/image.gif';
import {NavLink} from 'react-router-dom';
import Common from './Common';
const Home=()=>{
   return(
   <>
    <Common name="Grow Your Business With" imgsrc={image} visit='/service' btnname='Get Started'/>
    </>
 )}
export default Home;