import React, { Component } from 'react'
import Appbar from '../AppBar/Appbar'
import './Welcome.module.css';
import Cards from '../Cards/Cards';

class Welcome extends Component {
    render() {
        return (
            <div>
                <Appbar />
                <Cards />
            </div>
        )
    }
}

export default Welcome
