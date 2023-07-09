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
            image:'https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif',
            title:'What is Cybersecurity? Importance and its uses & the growing challenges in 2023!',
            tag:'Look around today, you will witness that we are more reliant on technology and devices'
          },
          {
            id : '2',
            image:'https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif',
            title:'Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?',
            tag:'Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,'
          },
          {
            id : '3',
            image:'https://www.guvi.in/blog/wp-content/uploads/2023/03/skills.jpg',
            title:'Top 10 Front-End Developer Skills You Should Know',
            tag:'Websites nowadays are eye-catchy, and also responsive at the same time. Ever wondered who’s the'
          },
          {
            id : '4',
            image:'https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png',
            title:'10 Best Database Management Systems For Software Developers',
            tag:'In this digitized world, where data is an asset to businesses, it has become very'
          },
          {
            id : '5',
            image:'https://www.guvi.in/blog/wp-content/uploads/2022/11/Gray-Green-Illustration-Business-Blog-Banner-2048x1152.png',
            title:'5 Tips to negotiate your salary as a Full Stack Developer',
            tag:'Negotiation is such an important life skill. We are negotiating constantly, whether it’s for salary,'
          },
          {
            id : '6',
            image:'https://www.guvi.in/blog/wp-content/uploads/2022/06/1.-Amazon-fsd-salary-2048x1072.png',
            title:'Amazon Full Stack Developer Salaries In India',
            tag:'Full Stack Developer salaries at Amazon range from ₹ 4.5 Lakhs to ₹ 46 Lakhs'
          },
          {
            id : '7',
            image:'https://www.guvi.in/blog/wp-content/uploads/2021/03/Cybersecurity-ultimate-guide.png',
            title:'Top 10 Ethical Hacking Books for Beginner to Advanced',
            tag:'Did you know that according to the University of Maryland hackers attack every 39 seconds'
          },
          {
            id : '8',
            image:'	https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9.png',
            title:'Top 7 Cyber Security Attacks in Real Life',
            tag:'Cyber security attacks are the type of actions that are designed to destroy, steal, modify'
          },
          {
            id : '9',
            image:'https://www.guvi.in/blog/wp-content/uploads/2022/03/10-backend-web-development-frameworks.png',
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