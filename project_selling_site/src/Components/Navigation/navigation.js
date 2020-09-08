import React from 'react';
import classes from './navigation.module.css';
import Logo from './Logo/logo'
import NavigationItems from './NvaigationItems/navigationItems'

const navigationBar = () => { 


   return(
        <div className={classes.NavBar}>
            <div className={classes.navigator}>
                <Logo/>
                <NavigationItems/>
            </div>
            
        </div>
    );

}


export default navigationBar;