import React from 'react'
import { useState } from 'react'
import Software from './Software';
import {Routes,Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const DataScience = () => {
    const [card,setCard]=useState(
        [
          {
            id : '1',
            image:'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2Fcontent%2Fcover_image_file%2Fcover_image%2F1282568%2Fregular_1708x683_0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Newsletter-f90d29e5d2384eab9f4f76a0a18fa9a8.png',
            title:'Top 10 Ethical Hacking Books for Beginner to Advanced',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '2',
            image:'https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg',
            title:'Salary of a NodeJs Developer in Famous 10 Companies in India',
            tag:'NodeJs developers stand among the high-paid developers in India. The salary of a NodeJS developer'
          },
          {
            id : '3',
            image:'https://www.statcan.gc.ca/sites/default/files/dsn-landing-page-test-2.png',
            title:'Ionic vs React Native: Best Mobile App Framework in 2023',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '4',
            image:'https://www.orientsoftware.com/Themes/OrientSoftwareTheme/Content/Images/blog/2021-11-25/data-science-frameworks.jpg',
            title:'7 Powerful Steps to Land a Software Developer Internship',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '5',
            image:'https://www.statcan.gc.ca/sites/default/files/dsn-nwsltr-25-800x451_0.png',
            title:'Machine Learning Must-Knows: Reliable Models and Techniques',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '6',
            image:'https://www.statcan.gc.ca/sites/default/files/dsn-landing-page-deep-neural.png',
            title:'7 Powerful Steps to Land a Software Developer Internship',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '7',
            image:'https://www.statcan.gc.ca/sites/default/files/dsn-landing-page-computer-vision.png',
            title:'Know This Before Stepping Into Full Stack Development',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '8',
            image:'https://www.statcan.gc.ca/sites/default/files/dsn-landing-page-indigenous-ocr.png',
            title:'7 Powerful Steps to Land a Software Developer Internship',
            tag:'Software development is set to grow at the rate of 25% between 2021-2031. An illustrious'
          },
          {
            id : '9',
            image:'https://www.statcan.gc.ca/sites/default/files/dsn-landing-page-document-cracker.jpg',
            title:'10 Best Database Management Systems For Software Developers',
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

export default DataScience