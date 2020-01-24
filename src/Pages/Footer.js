import React, {Component} from 'react';
import { FaCopyright} from 'react-icons/fa';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default  class Footer extends Component {
    //declare the state first
    constructor(props) {
        super(props);

        //bind the 'this' to this method
        this.onChangeEmailSignup = this.onChangeEmailSignup.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: ""
        }
    }

    //declare function 
    onChangeEmailSignup(e) {
        this.setState({
            email: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const emailAlert = {
            email: this.state.email  
        }
        
        axios.post("http://localhost:5000/email/add", emailAlert)
            .then(response => console.log(response.data))
        

        //alert the users by using toast
        toast("Thanks for your sign up. I will contact with you shortly", {
            type: "Success",
            position: toast.POSITION.TOP_CENTER,
            className: 'foo-bar'
        });

        //set delay for 6 seconds before redirect
        setTimeout(function () {
            window.location.href = "/"; 
         }, 6000); 
        
        
    }
    render(){
        return(
            <>
            <section className="services" style={{backgroundColor:'lightgrey', marginTop:-60}}>
                <div className="services-center">
                    <section style={{textTransform:"uppercase", fontWeight:"bold"}}>
                    <h6 className="contact-info">Please leave your email below. I will contact with you shortly.</h6>
                    <form action="/" style={{marginBottom:40}}>
                        <input className="contact-input1" type="email" placeholder="_Email Address" name="emailaddress" onChange={this.onChangeEmailSignup} /> 
                        <input className="contact-input2" type="submit" onClick={this.onSubmit}/>
                    </form> 
                    Copyright by Charlie Nguyen <FaCopyright />
                    </section> 
                </div>
                
            </section>
            </>
        )
    }
}