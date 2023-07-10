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
            image:'https://www.flexiventures.in/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-29-at-10.47.25-PM.jpeg',
            title:'Top Career Options in India in 2023',
            tag:'In today’s rapidly changing world, career choices carry immense significance. As the job market undergoes'
          },
          {
            id : '2',
            image:'https://img.etimg.com/thumb/msid-101221784,width-650,height-488,imgsize-776503,,resizemode-75/tcs-bribes.jpg',
            title:'What is TCS NQT | Everything You Need to Know',
            tag:'As a fresh graduate, your goal is to join a reputable company and start your'
          },
          {
            id : '3',
            image:'https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/002/882/original/Full-Stack_Developer.png?1646402124',
            title:'Ionic vs React Native: Best Mobile App Framework in 2023',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '4',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFDNTysvS3FXgm4GkfcqpuMEV4hRiCjaGvpw&usqp=CAU',
            title:'Machine Learning Must-Knows: Reliable Models and Techniques',
            tag:'Machine Learning (ML) is a field of Artificial Intelligence (AI) that focuses on the development'
          },
          {
            id : '5',
            image:'https://www.thinknexttraining.com/images/Full-Stack-Development-Course-in-Chandigargh-mob-min.jpg',
            tag:'As Engineering graduates, we are all extremely eager to land a job at TCS, one'
          },
          {
            id : '6',
            image:'https://www.ra2fat.com/imgs/service-3.gif',
            title:'7 Powerful Steps to Land a Software Developer Internship',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          }
          
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