import React from 'react';
import NavigationBar from '../../Navigation/navigation';
import Routes from '../../../Routes/routes';


const layout = (props) => { 


   return(
       <React.Fragment>
           <NavigationBar/>
           <main>
               {props.children}
           </main>
           <Routes/>
       </React.Fragment>
   );

}


export default layout;