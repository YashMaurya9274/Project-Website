import React,{Component} from 'react';
import classes from './card.module.css';




class Card extends Component{

   
    render(){

        return(
            <div className={classes.Card}>
                 <h3>{this.props.sub}</h3> 
                 
                <div className={classes.overlay}>
                     <img src={this.props.img} alt='img'/>
                 </div>
            </div>
         );
     

    }
} 

   

export default Card;