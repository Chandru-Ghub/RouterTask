import './App.css';
import All from './All';
import Carrer from './Carrer';
import FullStackDevelopment from './FullStackDevelopment';
import CyberSecurity from './CyberSecurity';
import DataScience from './DataScience';
import {Routes,Route} from 'react-router-dom';
import { NavLink } from "react-router-dom";
// import Footer from './Footer';
// import { useState } from 'react';
import Software from './Software';
import blog from './Guvi-blog-logo.webp'
import blogHeader from './blog-header.png'
function App() {


  
  return (
   <div className='App'>
    <div className="navbar">
      <img src={blog} alt="logo" />

    </div>
    <div className='top'>
     <img className='bimage' src={blogHeader} alt="frontImage" />
    <div className="links">
       
  <NavLink
            to="/All"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active link" : "normal"
            }
          >
            ALL
</NavLink>
        <NavLink
              to="/fullstackdevelopment"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active link" : "normal"
              }
            >
            FULL STACK DEVELOPMENT
</NavLink>
        <NavLink
              to="/cybersecurity"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active link" : "normal"
              }
            >
            CYBER SECURITY
</NavLink>
        <NavLink
            to="/datascience"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active link" : "normal"
            }
          >
          DATA SCIENCE
</NavLink>
        <NavLink
            to="/carrer"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active link" : "normal"
            }
          >
          CARRER
</NavLink>
</div>
    </div>
      <Routes>
        <Route path='/all' Component={All}/>
        <Route path='/fullstackdevelopment' Component={FullStackDevelopment}/>
        <Route path='/cybersecurity' Component={CyberSecurity}/>
        <Route path='/datascience' Component={DataScience}/>
        <Route path='/carrer' Component={Carrer}/>
      </Routes>   
      {/* <Footer/>   */}
      <Software/>
   </div>
  );
}

export default App;
