import React from 'react'
import { useState } from 'react'
import Software from './Software';
import {Routes,Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Carrer = () => {
    const [card,setCard]=useState(
        [
          {
            id : '1',
            image:'https://www.guvi.in/blog/wp-content/uploads/2023/06/top-career-options-in-india.jpg',
            title:'Top Career Options in India in 2023',
            tag:'In today’s rapidly changing world, career choices carry immense significance. As the job market undergoes'
          },
          {
            id : '2',
            image:'https://www.guvi.in/blog/wp-content/uploads/2023/06/TCS-NQT-EXAM-2023.jpg',
            title:'What is TCS NQT | Everything You Need to Know',
            tag:'As a fresh graduate, your goal is to join a reputable company and start your'
          },
          {
            id : '3',
            image:'https://www.guvi.in/blog/wp-content/uploads/2022/09/close-up-mobile-phone-with-cloud-apps-2048x1365.jpg',
            title:'Ionic vs React Native: Best Mobile App Framework in 2023',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '4',
            image:'https://www.guvi.in/blog/wp-content/uploads/2023/05/image-13.png',
            title:'Machine Learning Must-Knows: Reliable Models and Techniques',
            tag:'Machine Learning (ML) is a field of Artificial Intelligence (AI) that focuses on the development'
          },
          {
            id : '5',
            image:'https://www.guvi.in/blog/wp-content/uploads/2023/04/image-18.png',
            title:'Crack the TCS IPA Exam: Top Questions and Exclusive Tips for Success!',
            tag:'As Engineering graduates, we are all extremely eager to land a job at TCS, one'
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
            title:'Master Backend Development With JavaScript | Become a Pro',
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

export default Carrer