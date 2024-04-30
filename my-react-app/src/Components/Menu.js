import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Booking = () => {
    const [loading, setLoading] = useState(true);
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/foods');
                setFoods(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching food data:', error.message);
            }
        };

        fetchData();
    }, []);

    const truncateDescription = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    const handleHalfButtonClick = (foodId) => {
        // Handle the half button click event
        console.log(`Half button clicked for food with ID ${foodId}`);
    };

    const handleFullButtonClick = (foodId) => {
        // Handle the full button click event
        console.log(`Full button clicked for food with ID ${foodId}`);
    };

    return (
        <div className="container-xxl py-2">
            <div className="container-fluid px-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                    <h1 className="mb-5">Most Popular Items</h1>
                </div>

                <div className="row grid-container">
                    {foods.map(food => (
                        <div key={food._id} className="grid-item col-md-4 mb-4" style={{ width: '100%', height: '300px' }}>
                            <div className="card border-0 shadow" style={{ width: '100%', height: '100%' }}>
                                <div className='' style={{position:"relative"}}>
                                    <img className="card-img-top" src={food.img} alt={food.name} style={{ width: "100%", height: "200px" }}/>
                                    <div className='bg-white add-minus p-1'>
                                        <span className='px-1 mx-1 border-end' style={{cursor:"pointer"}}>-</span>
                                        <span className='mx-2'>{1}</span>
                                        <span className='px-1 mx-1 border-start' style={{cursor:"pointer"}}>+</span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row d-flex">
                                        <h6 className="col-md-6 card-title mt-1">{food.name}</h6>
                                        <p className='col-md-6'>
                                            <span className="fas fa-star text-warning"></span>
                                            <span className="fas fa-star text-warning"></span>
                                            <span className="fas fa-star text-warning"></span>
                                            <span className="fas fa-star text-warning"></span>
                                            <span className="fas fa-star-half-alt text-warning"></span>
                                        </p>
                                    </div>
                                    <p className="card-text">{truncateDescription(food.description, 100)}</p>
                                    <p className="card-text"><h5><span className=" text-primary">{food.price}</span></h5></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Booking;
