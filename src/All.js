import React from 'react'
import { useState } from 'react'
import { NavLink } from "react-router-dom";
import Software from './Software';
import {Routes,Route} from 'react-router-dom';
import img1 from './1.webp'
import img2 from './skills.jpg'
import img3 from './react-1536x804.jpg'
import img4 from './backend-skills.jpg'
import img5 from './software-engineering-internships.webp'
import img6 from './Gray-Green-Illustration-Business-Blog-Banner-2048x1152.png'

const All = () => {
    const [card,setCard]=useState(
        [
          {
            id : '1',
            image:'https://www.scnsoft.com/blog-pictures/testing/testing-trends-2019.png',
            title:'7 Powerful Steps to Land a Software Developer Internship',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '2',
            image:'http://www.guvi.in/blog/wp-content/uploads/2023/03/backend-skills.jpg',
            title:'Top 7 Back-End Developer Skills You Should Know',
            tag:'We all rely on the internet for everything. Open google and ask your doubt, and'
          },
          {
            id : '3',
            image:{img2},
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
            image:{img6},
            tag:'Negotiation is such an important life skill. We are negotiating constantly, whether it’s for salary,'
          },
          {
            id : '6',
            image:'https://www.guvi.com/blog/wp-content/uploads/2022/06/1.-Amazon-fsd-salary-2048x1072.png',
            title:'Amazon Full Stack Developer Salaries In India',
            tag:'Full Stack Developer salaries at Amazon range from ₹ 4.5 Lakhs to ₹ 46 Lakhs'
          },
          {
            id : '7',
            image:{img3},
            title:'6 Essential Prerequisites For Learning ReactJS',
            tag:'Have you ever wished to create your own modern website or app with high performance'
          },
          {
            id : '8',
            image:'https://www.guvi.in/blog/wp-content/uploads/2021/08/Full-Stack-Development-qa-2048x1072.jpg',
            title:'Know This Before Stepping Into Full Stack Development',
            tag:'Is Sundar Pichai your role model? Do you wish to build your way to top'
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

export default All