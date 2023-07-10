import React from 'react'
import { useState } from 'react'
import { NavLink } from "react-router-dom";
import Software from './Software';
import {Routes,Route} from 'react-router-dom';


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
            image:'https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_a_Back_End_Developer.jpg',
            title:'Top 7 Back-End Developer Skills You Should Know',
            tag:'We all rely on the internet for everything. Open google and ask your doubt, and'
          },
          {
            id : '3',
            image:'https://www.codelivly.com/wp-content/uploads/2022/10/maxresdefault-1-1024x576.jpg',
            title:'Top 10 Front-End Developer Skills You Should Know',
            tag:'Websites nowadays are eye-catchy, and also responsive at the same time. Ever wondered who’s the'
          },
          {
            id : '4',
            image:'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2Fcontent%2Fcover_image_file%2Fcover_image%2F1282568%2Fregular_1708x683_0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Newsletter-f90d29e5d2384eab9f4f76a0a18fa9a8.png',
            title:'10 Best Database Management Systems For Software Developers',
            tag:'In this digitized world, where data is an asset to businesses, it has become very'
          },
          {
            id : '5',
            image:'https://www.simplilearn.com/ice9/free_resources_article_thumb/full_stack_banner.jpg',
            tag:'Negotiation is such an important life skill. We are negotiating constantly, whether it’s for salary,'
          },
          {
            id : '6',
            image:'https://d2908q01vomqb2.cloudfront.net/887309d048beef83ad3eabf2a79a64a389ab1c9f/2021/11/30/DBBLOG01944-ARCHDIAG.png',
            tag:'Full Stack Developer salaries at Amazon range from ₹ 4.5 Lakhs to ₹ 46 Lakhs'
          },
          {
            id : '7',
            image:'https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/2ea1d/react.jpg',
            title:'6 Essential Prerequisites For Learning ReactJS',
            tag:'Have you ever wished to create your own modern website or app with high performance'
          },
          {
            id : '8',
            image:'https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2017/02/Blog-Cover-image-Fullstack-Highres.jpg',
            title:'Know This Before Stepping Into Full Stack Development',
            tag:'Is Sundar Pichai your role model? Do you wish to build your way to top'
          },
          {
            id : '9',
            image:'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbnQlMjBlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
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