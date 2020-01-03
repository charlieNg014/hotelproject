import React, {Component} from 'react';
import { FaCopyright} from 'react-icons/fa';

export default  class Footer extends Component {
    //declare the state first
    state = {
        // contacts: [
        //     {icon: <FaMailBulk />, title:"Email", info: "mngu0070@student.monash.edu"},
        //     {icon: <FaPhoneVolume />, title:"Phone", info: "0450 766 930"}
        // ]
        contacts: [
            {title:"Stay Connected", subtitle:"Monash University", details1: "14/201 Auburn Road, Hawthorn VIC 3122", details2: "0450 766 930", details3: "mngu0070@student.monash.edu"},
            {title:"Self-Introduction", subtitle: "Australian permanent resident and first year Monash software development student looking for an entry role or internship as a junior developer. Being a fast-learner, well-equipped knowledge in pogramming plus highly adaptable, I am expecting to participate in exciting projects to gain as much as possible hands-on experiences and contribute to the team.", details1: "", details2: "", details3: ""},
            {title:"References", subtitle: "Nawfal Ali, PhD", details1: "Teaching Associate. Faculty of Information Technology, Monash University", details2: "", details3: ""}
        ]
    }
    render(){
        return(
            <>
            <section className="services" style={{backgroundColor:'lightgrey', marginTop:-60}}>
                <div className="services-center">
                    <section style={{textTransform:"uppercase", fontWeight:"bold"}}>
                    <h6 className="contact-info">Please leave your email below. I will contact with you shortly.</h6>
                    <form action="/" style={{marginBottom:40}}>
                        <input className="contact-input1" type="email" placeholder="_Email Address" name="emailaddress" /> 
                        <input className="contact-input2" type="submit"/>
                    </form> 
                    Copyright by Charlie Nguyen <FaCopyright />
                    </section> 
                </div>
                
            </section>
            </>
        )
    }
}