import React, {Component} from 'react';
import axios from 'axios';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    user:"",
    err:"",
}

class renderlogin extends Component
{
    state = initialState;

    validate = () => {
        let emailError = "";
        let passwordError = "";
    
        if(!this.state.email.includes("@")){
            emailError = "Email id is incorrect";
        }
        if(!this.state.password){
            passwordError = "Password is incorrect";
        }
        if(emailError || passwordError){
            this.setState({emailError});
            this.setState({passwordError});
            return false;
        }
        return true;
    }

    handleEmailChange = event => {
        this.setState({
            email:event.target.value
        })
    }

    handlePasswordChange = event => {
        this.setState({
            password:event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if(this.state.email.length===0|| this.state.password.length===0){
            alert('Please enter the values');
        }
        else{
        const user ={
            email : this.state.email,
            password:this.state.password
        }
        if(!this.state.email.includes("@")){
        }
        else{
        axios.post('http://localhost:2406/users/login',user)
        .then(res=>{
            console.log(res.data);
            if(res.data.error){
                alert(res.data.error)
                localStorage.removeItem('user');
            }else{
                this.setState({
                    user:res.data
                })

                localStorage.setItem('user',this.state.user);

                window.location = '/home';
                
            }

        })
        }
        if (isValid)
        {
            console.log(this.state);
            this.setState(initialState);
        }
    }

    }

    render() {
        
        return (
            <div className="all">
                <br></br><br></br><br></br><br></br><br></br>
            <Form className="login-form" onSubmit={this.handleSubmit} >
                <h1>
                 <span className="font-weight-bold"><center>Quick Buy</center></span>
                </h1>
                <h2 className="text-center">
                    Welcome
                </h2>
                <FormGroup>
                    <Label>Email</Label>
                    <Input name="email" placeholder="Enter email id" value = {this.state.email} onChange={this.handleEmailChange}/>
                    <div style={{fontSize: 15, color: "#ffffcc"}}>{this.state.emailError}</div>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" name="password" placeholder="Enter password" value = {this.state.password} onChange={this.handlePasswordChange}/>
                    <div style={{fontSize: 15, color: "#ffffcc"}}>{this.state.passwordError}</div>
                </FormGroup>
                <br />
                <Button type="submit" className="btn-lg btn-dark btn-block">
                    Log in
                </Button>
                <br></br>
                <div className="text-center">
                    <a href="/register">Sign Up</a>
                </div>
            </Form>
            </div>
        )
    }
}

export default renderlogin;