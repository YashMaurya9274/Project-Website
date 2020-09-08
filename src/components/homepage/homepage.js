import React from 'react';
import classes from './homepage.module.css';
import Cards from '../Cards/cards'



const homePage = (props) => { 

   
   return(
       <div className={classes.home}>
           <div className={classes.title}>
               <div className={classes.title_content}>
                    <p>Welcome</p>
               </div>
               <div className={classes.title_sub_content}>
                    <p>Our websites offers variety of projects for students and computer geeks out there.</p>
                    <br></br>
                    <br></br>
                    <p>Please choose your language of interest.</p>
               </div>
           </div>
           <div className={classes.mainContent}>
                   <Cards/>
            </div>
       </div>
   );

}


export default homePage;