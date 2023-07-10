import React from 'react'
import { useState } from 'react'
import { NavLink } from "react-router-dom";
import Software from './Software';
import {Routes,Route} from 'react-router-dom';
const CyberSecurity = () => {
    const [card,setCard]=useState(
        [
          {
            id : '1',
            image:'https://1st-it.com/wp-content/uploads/2017/05/cyber-attack.gif',
            title:'What is Cybersecurity? Importance and its uses & the growing challenges in 2023!',
            tag:'Look around today, you will witness that we are more reliant on technology and devices'
          },
          {
            id : '2',
            image:'https://www.hurix.com/wp-content/uploads/2022/01/Cyber-security-1200x565.jpg',
            title:'Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?',
            tag:'Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,'
          },
          {
            id : '3',
            image:'https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/cybersecurity-07-scaled.jpg',
            title:'Top 10 Front-End Developer Skills You Should Know',
            tag:'Websites nowadays are eye-catchy, and also responsive at the same time. Ever wondered who’s the'
          },
          {
            id : '4',
            image:'https://contentstatic.techgig.com/thumb/msid-87370778,width-460,resizemode-4/5-Popular-cybersecurity-certificate-courses-for-techies-in-2021.jpg?16724',
            title:'10 Best Database Management Systems For Software Developers',
            tag:'In this digitized world, where data is an asset to businesses, it has become very'
          },
          {
            id : '5',
            image:'https://www.asisonline.org/globalassets/security-management/current-issues/2022/may-june/0522-cyber-log4shell.gif',
            title:'5 Tips to negotiate your salary as a Full Stack Developer',
            tag:'Negotiation is such an important life skill. We are negotiating constantly, whether it’s for salary,'
          },
          {
            id : '6',
            image:'https://cdnsm5-ss18.sharpschool.com/UserFiles/Servers/Server_211876/Image/Our%20Departments/Information%20Technology/Cybersecurity/Cybersecurity%20Awareness%20Month/2022/Private%20data.gif',
            title:'Amazon Full Stack Developer Salaries In India',
            tag:'Full Stack Developer salaries at Amazon range from ₹ 4.5 Lakhs to ₹ 46 Lakhs'
          },
          {
            id : '7',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcbArIomWJ8b5gBE1_PHgnRhxUg-VPAZMBsQ&usqp=CAU',
            title:'Top 10 Ethical Hacking Books for Beginner to Advanced',
            tag:'Did you know that according to the University of Maryland hackers attack every 39 seconds'
          },
          {
            id : '8',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSV_kO4OFOCHO5ThWvfToHcTZA4UA1jQlfGA&usqp=CAU',
            title:'Top 7 Cyber Security Attacks in Real Life',
            tag:'Cyber security attacks are the type of actions that are designed to destroy, steal, modify'
          },
          {
            id : '9',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuwuBFaRbl3HzfQRhFGV8LZXLGzl8r5GiWVg&usqp=CAU',
            title:'Top 10 Backend Web Development Frameworks In 2023',
            tag:'Want to know which backend frameworks to choose and how? Then consider this as a'
          },
        ])
  return (
 
   
    <div className='all cr' style={{backgroundColor:null}}>
   
   
    {card.map((a)=>  
    <div className="card">
       
        <img className='intern' src={a.image} alt="" />
        <p className='title'>{a.title}</p>
       
        <p className='tag'>{a.tag}</p>
        <NavLink to='/software'>
        <button>READ MORE>></button>
        </NavLink>
    </div>
      )}
      <Routes>
        <Route path='/software' Component={Software}/>
      </Routes>
    </div>
  )
    }
  export default CyberSecurity