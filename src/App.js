import React, { Component } from 'react';
import Loader from './components/Loader/Loader';
import Welcome from './components/Welcome/Welcome';
import './App.module.css';

class App extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            isloading : false
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({isLoading : true})
        },3200)
    }

    render(){
        return (
            <div>
                {this.state.isLoading ? <Welcome /> : <Loader />}
            </div>
        )
    }

    // render(){
    //     return(
    //         <div>
    //             <Loader />
    //         </div>
    //     )
    // }
        
}

export default App;