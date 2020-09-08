import React, { Component } from 'react';
import  styles from './Loader.module.css';





class Loader extends Component {
    
    

    render() {
        const displayLoader = 'loading...'
        return (
            <div className= {styles.wavy}>
                { displayLoader.split('').map( (loadingChar,id) => (

                    <span 
                        key = {id}
                        style = {{['--i']: id }}
                        >
                            {loadingChar}
                    </span>

                ))}

            </div>
           
        )
    }
}

export default Loader;