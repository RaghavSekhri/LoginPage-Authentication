import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
export class Home extends Component {
    render() {
        if(localStorage.getItem('user')){
            return (
                <div>
                    <h1>hi</h1>
                    
                </div>
            )
        }else{
            return(
                <Redirect to="/" />
            )
            
        }
        
    }
}

export default Home
