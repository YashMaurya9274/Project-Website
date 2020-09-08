import React from 'react';
import classes from './navigationItems.module.css';
import NavigationItem from './NavigationItem/navitem';


const navigationItems = () => { 


   return(
       <div className = {classes.navItems}>
           <ul className={classes.items}>
                <NavigationItem link='/' exact active>Home</NavigationItem>
                <NavigationItem link='/projects'  active>Projects</NavigationItem>
                <NavigationItem link='/blog'  active>Blog</NavigationItem>
           </ul>
       </div>
   );

}


export default navigationItems;