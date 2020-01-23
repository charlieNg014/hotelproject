import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import {ProjectContext} from "../context";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 
export default class MyApp extends React.Component {
    static contextType = ProjectContext;
    
    render() {
        const flag = false;
        let {finalBooking: ppfinalBooking, detailRooms: ppdetailsRooms} = this.context;
        // console.log(ppfinalBooking);
        
        
        const Difference_In_Time = ppfinalBooking.checkoutDate.getTime() - ppfinalBooking.checkinDate.getTime(); 
        const night = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));    

        const paymentAPI = () => {
            console.log("pass");
            console.log(ppfinalBooking);
            
            
            axios.post("http://localhost:5000/booking/add", ppfinalBooking)
                .then(response => console.log(response.data));
        }
        
        const onSuccess = (ppfinalBooking) => {
            // Congratulation, it came here means everything's fine!    
            console.log("The payment was succeeded!", ppfinalBooking);
            paymentAPI();

            toast("Successful. Please check your email for the details!", {
                type: "Success",
                position: toast.POSITION.TOP_CENTER,
                className:'foo-bar'
              });

            // set delay for 6 seconds before redirect
            setTimeout(function () {
                window.location.href = "/"; 
            }, 6000);

            // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            console.log("error");
            
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }

        // const paymentAPI = () => {
        //     if (flag == true) {
        //         console.log("pass");
        //         // console.log(flag);
        //         // console.log(ppfinalBooking);
                
        //     } else {
        //         console.log("fail");
        //     }
        // }

        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'AUD'; // or you can set this value from your props or state
        let total = ppdetailsRooms.price * night * 1.1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
 
        const client = {
            sandbox:    process.env.REACT_APP_APP_ID,      
            production: 'YOUR-PRODUCTION-APP-ID'
        }
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
 
        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} paymentAPI={paymentAPI} />
        );
    }
}