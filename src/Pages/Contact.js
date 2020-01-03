import React, {Component} from 'react';
import Title from '../components/Title';

export default  class Contact extends Component {
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
            <section className="services">
                <Title title="Contacts"/>
                <div className="services-center">
                {/* <div className="row"> */}
                    {/* <div className="col-4 contact-title"> */}
                        {/* <p className="contact-subtitle">Stay Connected </p> 
                        <h6 className="contact-info">Please leave your email below. I will contact with you shortly.</h6>
                        <form action="/">
                            <input className="contact-input1" type="email" placeholder="_Email Address" name="emailaddress" /> 
                            <input className="contact-input2" type="submit"/>
                        </form> */}
                    {/* </div> */}
                    {/* <div className="col-4 contact-title"> */}
                        {/* <p className="contact-subtitle">Self-Introduction</p>
                        <h6 className="contact-info">Australian permanent resident and first year Monash software development student looking for an entry role or internship as a junior developer. Being a fast-learner, well-equipped knowledge in pogramming plus highly adaptable, I am expecting to participate in exciting projects to gain as much as possible hands-on experiences and contribute to the team.</h6> */}
                    {/* </div> */}
                    {/* <div className="col-4 contact-title"> */}
                        {/* <p className="contact-subtitle">References </p> 
                        <h6 className="contact-info">Nawfal Ali, PhD</h6>
                        <h6 className="contact-info">Teaching Associate. Faculty of Information Technology, Monash University</h6> */}
                    {/* </div> */}
                        {this.state.contacts.map((item, index) => {
                            return(
                                <article key={index} className="service">
                                    <h4 style={{marginBottom:15, textTransform:"uppercase", color:'white'}}>{item.title}</h4>
                                    <p>{item.subtitle}</p>
                                    <p>{item.details1}</p>
                                    <p>{item.details2}</p>
                                    <p>{item.details3}</p>
                                </article>
                            )
                        })}
                </div>
            </section>
            </>
        )
    }
}