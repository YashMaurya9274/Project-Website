import React from 'react';
import classes from './cards.module.css';
import Card from './card/card';
import { NavLink } from 'react-router-dom';
import python from '../../images/python.png'
import js from '../../images/Js.png'
import cpp from '../../images/cpp.png'
import css from '../../images/css.png'



const cards = () => { 

    
    const category = ['Python', 'JavaScript', 'C++', 'CSS'];
    const img =  [python,js,cpp,css]

    let popUp_Cards = (
         category.map((sub,id) =>(
            <NavLink key = {id} to={'/' + sub} exact>
               <Card sub={sub} img={img[id]}/>
            </NavLink>
       )).reduce((arr, el) =>{  
        return arr.concat(el);
    },[])
    )
   return(
       <div className={classes.Cards_Container}>
           {popUp_Cards}
           {/* <div className={classes.mini_Cards}> */}

           {/* </div> */}
       </div>
   );

}


export default cards;