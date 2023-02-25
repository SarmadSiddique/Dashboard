import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";
import "./Navbar.css"
const overflow = {
  overflow: "hidden"
}
function Navbar() {
  // for storing data
  const [local ,setlocal]= useState("")
  // for getting data
  const [getdata , setgetdata]= useState("")
  const handle=(e)=>{
    setlocal(e.target.value)
    localStorage.setItem("Name",(local));
    
    
  }
  const click=()=>{
    if(local)
    {
   setgetdata( localStorage.getItem("Name",(local))) ;
      // alert(local);
    }
    else{
      alert("sorry")
    }
  }



 
  return (
    <div style={overflow} className="navbar d-md-flex flex-md-row flex-sm-column flex-nowrap justify-content-between align-items-center" >
      <div className="heading">
        <h3>Hi Sarmad {getdata}</h3>
        <h4>Welcome to <span> My Taxi Dashboard </span> </h4>
      </div>
      <div className="search">
        <BiSearch className='serch_icon' />
        <input type="text" placeholder='Search' onChange={handle} />
        

      </div>
      <button  id='input_btn' className= 'd-md-none     btn btn-outline-warning ' onClick={click}>click me </button>
    </div>

  )
}

export default Navbar