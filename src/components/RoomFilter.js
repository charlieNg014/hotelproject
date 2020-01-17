import React from 'react';
import Title from './Title';
import {ProjectContext} from '../context';
import {useContext} from 'react';

const getUnique = (items, value) => {
    return [...new Set(items.map(items => items[value]))]
}

export default function RoomFilter({rooms}) {
    //getting values from context
    const context = useContext(ProjectContext);
    const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = context;    
    let types = getUnique(rooms, 'type');
    let guest = getUnique(rooms, 'capacity');


    types = ["All", ...types]
    guest = [...guest];
    
    //map to jsx
    types = types.map((item, index) => {
        return(
            <option value={item} key={index}>{item}</option>
        )
    })

    guest = guest.map((item, index) => {
        return(
            <option value={item} key={index}>{item}</option>
        )
    })


    
    
    return(
        <section className="filter-container">
            <Title title="Search Rooms"/>
            <form className="filter-form">
                {/* display project types  */}
                <div className="form-group">
                    <label htmlFor="type">Rooms Types</label>
                    <select 
                    name="type" 
                    id="type"  
                    className="form-control" 
                    type={type}
                    onChange={handleChange}> 
                    {types}                
                    </select>
                </div>

                {/* display the guest */}
            <div className="form-group">
                <label htmlFor="capacity">Guest</label>
                <select 
                name="capacity" 
                id="capacity" 
                value={capacity}  
                onChange={handleChange}
                className="form-control"
                >
                {guest}              
                </select>
            </div>

            {/* display the price  */}
            <div className="form-group">
                <label htmlFor='price'>Price ${price}</label>
                {/* <input 
                type='range'
                name='price'
                min={minPrice}
                max={maxPrice}
                id="price"
                value={price}
                onChange={handleChange}
                className="form-control" 
                /> */}

                <input 
                style={{marginTop: 12}}
                type="range" 
                min={minPrice} 
                max={maxPrice} 
                className="slider" 
                id="price"
                value={price}
                onChange={handleChange}
                />           
            </div>

            {/* display the size  */}
            <div className="form-group">
                <label htmlFor='size'>Room Size</label>
                <div className="size-inputs">
                    <input 
                    style={{marginRight: 15}}
                    type='number'
                    name='minSize'
                    id="size"
                    value={minSize}
                    min={0}
                    onChange={handleChange}
                    className="form-control" 
                    />
                    <input 
                    type='number'
                    name='maxSize'
                    id="size"
                    value={maxSize}
                    max={1000}
                    onChange={handleChange}
                    className="form-control" 
                    />
                </div>
            </div>

            {/* extras  */}
            <div className="form-group" style={{marginTop:35}}>
                <div className="single-extra">
                    <input 
                    type="checkbox"
                    name="breakfast"
                    id="breakfast"
                    checked={breakfast}
                    onChange={handleChange}
                    >
                    </input>
                    <label htmlFor="breakfast">Breakfast</label>
               
                    <input style={{marginLeft:20}}
                    type="checkbox"
                    name="pets"
                    id="pets"
                    checked={pets}
                    onChange={handleChange}
                    ></input>
                    <label htmlFor="pets">Pets</label>
                </div>
            </div>

            </form>
        </section>
    )
}
