import React, { Component } from "react";
import items from "./data";
import { addDays } from "date-fns/esm";
import axios from 'axios';

//create context
const ProjectContext = React.createContext();

//set the default state
class ProjectProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        detailRooms: [],
        bookingDate: [],
        slug: true,
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false,
        checkinDate: new Date(),
        checkoutDate: addDays(new Date(), 1),
        startingDate: new Date(),
        testArray: ["1", "2"],
        finalBooking: [],
        bookedDateArray:[]
    };

    //assing value to array
    componentDidMount() {
        let rooms = this.formatItem(items);
        let slug = rooms.find((room) => room.slug === true);
        let featuredRooms = rooms.filter((room) => room.featured === true);
        let maxPrice = Math.max(...rooms.map((item) => item.price));
        let maxSize = Math.max(...rooms.map((item) => item.size));
        let testArray = ["1", "2"];
        let finalBooking = ["1"];
        let bookedDateArray = [];
        //set the new state
        this.setState({
            rooms,
            slug,
            featuredRooms,
            detailRooms: rooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            size: maxSize,
            maxSize,
            maxPrice,
            testArray,
            finalBooking,
            bookedDateArray
        });

        // console.log(testArray);
    }

    onChangeDay(day) {
        if (day < 10) {
           day = "0" + day.toString();
        } 
        return day;
    }

    onChangeMonth(month) {
        const mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        return mlist[month];
    }

    onChangeTotalDays(startDate, finishDate) {
        const Difference_In_Time = finishDate.getTime() - startDate.getTime(); 
        const Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
        
        return Difference_In_Days;
    }

    getMonth(month) {
        const mlist = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
        return mlist[month];
      }

    getProperDate(date) {
        const day = date.getDate();
        const inputMonth = this.getMonth(date);
        const month = this.getMonth(inputMonth);
        const year = date.getFullYear();
        const properDate = day + " - " + month + " - " + year;

        return properDate;
    };

    handleCheckinDateChange = (date) => {
        this.setState({
            checkinDate: date
        });
        const checkinDate = date;
        return checkinDate;
    };

    handleCheckoutDateChange = (date) => {
        this.setState({
            checkoutDate: date
        });
        const checkoutDate = date;
        return checkoutDate;
    };

    getBookingDetails = (details) => {
        this.setState({
            finalBooking: details
        })
        const finalBooking = details;
        // const testBooking = this.state.finalBooking.splice(0, 1, details);
        // console.log(testBooking);
       
        return finalBooking;
    };

    //testing function to get array of booked date from backend
    testFunction = () => {
        axios.get(`http://localhost:5000/booking/${this.state.detailRooms.name}`)
                .then(response => {
                    // console.log(response.data);
                    const test = response.data;
                    console.log(test);

                    // console.log(myTest(test));
                    // this.getBookedDate(test);
                    this.setState({
                        bookedDateArray: test
                    })
                    
                })

                const bookedDateArray = test;            
                
                    return bookedDateArray;

               
    }

    getBookedDate = (date) => {
        // this.setState({
        //     bookedDateArray: date
        // })
        const bookedDateArray = date;
        console.log(bookedDateArray);
        
        return bookedDateArray;
    }

    onSubmit = (checkinDate, checkoutDate) => {
        const test = this.state.testArray.splice(
            0,
            2,
            this.state.checkinDate.toString(),
            this.state.checkoutDate.toString()
        );

        return test;
    };

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room) => room.slug === true);
        return room;
    };
    

    //format rooms data to get all details form data.js
    formatItem(items) {
        let tempItems = items.map((item) => {
            let id = item.sys.id;
            let image = item.fields.image;
            let images = item.fields.images.map((image) => image.fields.file.url);
            let room = {...item.fields, id, image, images };
            return room;
        });
        return tempItems;
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = event.target.name;

        this.setState({
                [name]: value
            },
            this.filterRoom
        );
    };

    getRoomId = (slug) => {
        let { rooms } = this.state;
        const id = rooms.find((room) => room.slug === slug);

        this.setState({
            detailRooms: id
        });

        // console.log(id);

        return id;
    };

    filterRoom = () => {
        let {
            rooms,
            type,
            capacity,
            price,
            size,
            minSize,
            maxSize,
            breakfast,
            pets
        } = this.state;
        let tempRooms = [...rooms];

        capacity = parseInt(capacity); //casting from string to integer
        price = parseInt(price);
        size = parseInt(size);

        //check if there is an option of choosing type of room
        if (type !== "all") {
            tempRooms = tempRooms.filter((room) => room.type === type);
        }

        //filter the capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
        }

        //filter price
        tempRooms = tempRooms.filter((room) => room.price <= price);

        //filter size
        tempRooms = tempRooms.filter(
            (room) => room.size >= minSize && room.size <= maxSize
        );

        //filter breakfast and pets
        if (breakfast) {
            tempRooms = tempRooms.filter((room) => room.breakfast === true);
        }

        if (pets) {
            tempRooms = tempRooms.filter((room) => room.pets === true);
        }

        this.setState({
            sortedRooms: tempRooms
        });
    };

    render() {
        return ( 
            <ProjectContext.Provider  
                 value =    { 
                 {
                    ...this.state,
                        getRoom: this.getRoom,
                        handleChange: this.handleChange,
                        getRoomId: this.getRoomId,
                        handleCheckinDateChange: this.handleCheckinDateChange,
                        handleCheckoutDateChange: this.handleCheckoutDateChange,
                        onSubmit: this.onSubmit,
                        getBookingDetails: this.getBookingDetails,
                        finalBooking: this.state.finalBooking,
                        testBooking: this.state.testBooking, 
                        onChangeDay: this.onChangeDay,
                        onChangeMonth: this.onChangeMonth,
                        onChangeTotalDays: this.onChangeTotalDays,
                        getBookedDate: this.getBookedDate,
                        bookedDateArray: this.state.bookedDateArray,
                        testFunction: this.testFunction,
                        getMonth: this.getMonth,
                        getProperDate: this.getProperDate
                }
            }>
             { this.props.children }  
             </ProjectContext.Provider>
        );
    }
}

const ProjectConsumer = ProjectContext.Consumer;
export function withProjectConsumer(Component) {
    return function ConsumerWrapper(props) {
        return ( 
            <ProjectConsumer>
                {(value) => < Component {...props }
                context = { value }
                />} 
                </ProjectConsumer>
            );
        };
    }

    export { ProjectContext, ProjectProvider, ProjectConsumer };