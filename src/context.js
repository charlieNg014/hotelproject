import React, { Component } from "react";
import items from "./data";
import { addDays } from "date-fns/esm";

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
        finalBooking: ["1"]
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
            finalBooking
        });

        // console.log(testArray);
    }

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

    getBookingDetails = (detail) => {
        const testBooking = this.state.finalBooking.splice(0, 1, detail);
        // console.log(finalBooking);
        console.log(testBooking);
       
    
        return testBooking;
    };

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
                        testBooking: this.state.testBooking
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