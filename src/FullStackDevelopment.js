import React from 'react'
import { useState } from 'react'
import Software from './Software';
import {Routes,Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const FullStackDevelopment = () => {
    const [card,setCard]=useState(
        [
          {
            id : '1',
            image:'https://www.guvi.in/blog/wp-content/uploads/2022/11/giphyFSD.gif',
            title:'7 Powerful Steps to Land a Software Developer Internship',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '2',
            image:'https://www.guvi.in/blog/wp-content/uploads/2022/11/salary02-2048x2048.jpg',
            title:'Salary of a NodeJs Developer in Famous 10 Companies in India',
            tag:'NodeJs developers stand among the high-paid developers in India. The salary of a NodeJS developer'
          },
          {
            id : '3',
            image:'https://www.guvi.in/blog/wp-content/uploads/2022/09/close-up-mobile-phone-with-cloud-apps-2048x1365.jpg',
            title:'Ionic vs React Native: Best Mobile App Framework in 2023',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '4',
            image:'https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png',
            title:'7 Powerful Steps to Land a Software Developer Internship',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '5',
            image:'https://www.guvi.in/blog/wp-content/uploads/2022/11/Gray-Green-Illustration-Business-Blog-Banner-2048x1152.png',
            title:'7 Powerful Steps to Land a Software Developer Internship',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '6',
            image:'https://www.guvi.in/blog/wp-content/uploads/2022/06/1.-Amazon-fsd-salary-2048x1072.png',
            title:'7 Powerful Steps to Land a Software Developer Internship',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '7',
            image:'https://www.guvi.in/blog/wp-content/uploads/2021/05/react-1536x804.jpg',
            title:'7 Powerful Steps to Land a Software Developer Internship',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '8',
            image:'https://www.guvi.in/blog/wp-content/uploads/2022/03/10-backend-web-development-frameworks.png',
            title:'7 Powerful Steps to Land a Software Developer Internship',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '9',
            image:'https://www.guvi.in/blog/wp-content/uploads/2021/08/Full-Stack-Development-qa-2048x1072.jpg',
            title:'7 Powerful Steps to Land a Software Developer Internship',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
        ])
  return (
 
   
    <div className='full cr' style={{backgroundColor:null}}>
   
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


export default FullStackDevelopment