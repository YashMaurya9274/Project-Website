import React from 'react';
import HomePage from '../Components/homepage/homepage';
import { Route, Switch } from 'react-router-dom';


const routes = () => { 


   return(
       <React.Fragment>
           <Switch>
                <Route path = '/projects' render = {()=><h1>Page Not Found</h1>} />
                <Route path = '/blog' render = {()=><h1>Page Not Found + Blog</h1>} />
                <Route path = '/' exact render = {HomePage }/>
                <Route  render = {()=><h1>Page Not Found</h1>} />
           </Switch> 
       </React.Fragment>
   );

}


export default routes;