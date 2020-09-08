import React from 'react';
import classes from './navigationItem.module.css';
import { NavLink } from 'react-router-dom';

const navItem = (props) => { 


   return(
       <li className={classes.navItem}>
           <NavLink to={props.link}
                    exact={props.exact}
                    activeClassName={classes.active}>
                        {props.children}
                    </NavLink>
       </li> 
   );

}


export default navItem;