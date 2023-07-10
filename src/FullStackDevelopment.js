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
            image:'https://www.ra2fat.com/imgs/service-3.gif',
            title:'7 Powerful Steps to Land a Software Developer Internship',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '2',
            image:'https://asapkerala.gov.in/wp-content/uploads/2022/02/net.jpg',
            title:'Salary of a NodeJs Developer in Famous 10 Companies in India',
            tag:'NodeJs developers stand among the high-paid developers in India. The salary of a NodeJS developer'
          },
          {
            id : '3',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPW40ZpkgWkinp1McWkIKWYj4AYT5QI5Dmw&usqp=CAU',
            title:'Ionic vs React Native: Best Mobile App Framework in 2023',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '4',
            image:'https://softprodigy.com/wp-content/uploads/2021/07/full-stack-development-gif.gif',
            title:'7 Powerful Steps to Land a Software Developer Internship',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '5',
            image:'https://www.crio.do/blog/content/images/2021/04/Full-stack-development-blueprint.png',
            title:'7 Powerful Steps to Land a Software Developer Internship',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '6',
            image:'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2Fcontent%2Fcover_image_file%2Fcover_image%2F1282568%2Fregular_1708x683_0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Newsletter-f90d29e5d2384eab9f4f76a0a18fa9a8.png',
            title:'7 Powerful Steps to Land a Software Developer Internship',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '7',
            image:'https://thetapacademy.com/wp-content/uploads/2022/10/full-stack-developer-1024x724.jpeg',
            title:'7 Powerful Steps to Land a Software Developer Internship',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '8',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ya4F8o6IXBbOHpvgCzYH-30qFAKUVGHHCg&usqp=CAU',
            title:'7 Powerful Steps to Land a Software Developer Internship',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '9',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FO2XJ_gya5TtajgJRhEmfn7_MRe-ZVT6T5My4IC9RW6t2gHQXoRJwF4a3gSjkxjrCjU&usqp=CAU',
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