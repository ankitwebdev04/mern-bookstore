import React from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
function Contact(){

    return (
        <>
        <Navbar/>
       <div className='min-h-screen'> 
        <Course/>
        </div>
        <Footer/>
        </>
      );
}
export default Contact;