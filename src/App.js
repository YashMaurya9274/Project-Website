import React, {Component} from 'react';
// import Loader from './Components/Loader/Loader';
import Layout from './Components/UI/Layout/layout'
import { BrowserRouter} from 'react-router-dom';
import './App.css';
// import homePage from './Components/homepage/homepage';




class App extends Component { 
    
    state = {
      isLoading : true
    }

    componentDidMount(){
      setTimeout(()=>{
        this.setState({isLoading : false})
      },1200)
    }


 render(){

    

    return(

      
      <div className ="App">
        <BrowserRouter>
            <Layout>
            </Layout>
        </BrowserRouter>
      </div>


    );
 }
}


export default App;
