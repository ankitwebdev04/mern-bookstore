import React from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function Contact(){

    return (
        <>
        <Navbar/>
      <div className="max-w-screen mt-40 items-center justify-center text-center">
      <h2 className="">We'd love to hear from you! Fill out the details below or reach out directly.</h2>
       <br/>
       <span className="pr-5">Customer Name</span>
       <input type="text"  className='w-80 px-3 py-1 border rounder-md outline-none'/> 
       <br/> <br/>
       <span className="pr-5">Cust Mobile No</span>
       <input type="number"  className='w-80 px-3 py-1 border rounder-md outline-none'/> 
       <br/><br/>
       <span className="pr-5" >Customer Address</span>
       <textarea type="text"  className='w-80 px-3 py-1 border rounder-md outline-none'/> 
       <br/> 
        <Link to="/">
              <button className='  bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 '>
                Back </button>
            </Link>
            

       <div className='min-h-screen '> 
        {/* <Course/> */}
        </div>
        
        <Footer/>
        </div>
        </>
      );
}
export default Contact;