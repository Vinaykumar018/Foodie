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
            <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
              <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                <li className="nav-item">
                  <Link className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" to="#tab-1">
                    <i className="fa fa-coffee fa-2x text-primary" />
                    <div className="ps-3">
                      <small className="text-body">Popular</small>
                      <h6 className="mt-n1 mb-0">Breakfast</h6>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" to="#tab-2">
                    <i className="fa fa-hamburger fa-2x text-primary" />
                    <div className="ps-3">
                      <small className="text-body">Special</small>
                      <h6 className="mt-n1 mb-0">Launch</h6>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" to="#tab-3">
                    <i className="fa fa-utensils fa-2x text-primary" />
                    <div className="ps-3">
                      <small className="text-body">Lovely</small>
                      <h6 className="mt-n1 mb-0">Dinner</h6>
                    </div>
                  </Link>
                </li>
              </ul>

              <div className="category-item-container">
                <div className='row d-flex justify-content-center align-content-center'>
                  <div className='col-1'>
                    <img className="flex-shrink-0 img-fluid rounded-circle m-1" src="img/menu-1.jpg" alt style={{width: 80}} />
                    <span>Salad</span>
                  </div>
                  <div className='col-1'>
                    <img className="flex-shrink-0 img-fluid rounded-circle m-1" src="img/menu-2.jpg" alt style={{width: 80}} />
                    <span>Rolls</span>
                  </div>
                  <div className='col-1'>
                    <img className="flex-shrink-0 img-fluid rounded-circle m-1" src="img/menu-3.jpg" alt style={{width: 80}} />
                    <span>Deserts</span>
                  </div>
                  <div className='col-1'>
                    <img className="flex-shrink-0 img-fluid rounded-circle m-1" src="img/menu-4.jpg" alt style={{width: 80}} />
                    <span>Sandwich</span>
                  </div>
                  <div className='col-1'>
                    <img className="flex-shrink-0 img-fluid rounded-circle m-1" src="img/menu-5.jpg" alt style={{width: 80}} />
                    <span>Cake</span>
                  </div>
                  <div className='col-1'>
                    <img className="flex-shrink-0 img-fluid rounded-circle m-1" src="img/menu-6.jpg" alt style={{width: 80}} />
                    <span>Pure Veg</span>
                  </div>
                  <div className='col-1'>
                    <img className="flex-shrink-0 img-fluid rounded-circle m-1" src="img/menu-7.jpg" alt style={{width: 80}} />
                    <span>Pasta</span>
                  </div>
                  <div className='col-1'>
                    <img className="flex-shrink-0 img-fluid rounded-circle m-1" src="img/menu-8.jpg" alt style={{width: 80}} />
                    <span>Noodles</span>
                  </div>
                </div>
              </div>
              <hr className='line-clr my-5'/>

              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-2.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-3.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-4.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-5.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-6.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-7.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-2.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-3.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-4.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-5.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-6.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-7.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-2.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-3.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-4.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-5.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-6.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-7.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt style={{width: 80}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-container my-5">
              <div className="grid-item">
                <div className="card border-0 shadow">
                  <div className='' style={{position:"relative"}}>
                    <img className="card-img-top" src="img/about-4.jpg" alt="Card image cap" style={{width: "100%"}}/>
                    <div className='bg-white add-minus p-1'>
                      <span className='px-1 mx-1 border-end' style={{cursor:"pointer"}}>-</span>
                      <span className='mx-2'>{1}</span>
                      <span className='px-1 mx-1 border-start' style={{cursor:"pointer"}}>+</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row d-flex">
                      <h6 className="col-md-6 card-title mt-1">Veg Pried Rice</h6>
                      <p className='col-md-6'>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star-half-alt text-warning"></span>
                      </p>
                    </div>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, cum?</p>
                    <p className="card-text"><h5><span className=" text-primary">$12</span></h5></p>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="card border-0 shadow">
                  <div className='' style={{position:"relative"}}>
                    <img className="card-img-top" src="img/about-4.jpg" alt="Card image cap" style={{width: "100%"}}/>
                    <div className='bg-white add-minus p-1'>
                      <span className='px-1 mx-1 border-end' style={{cursor:"pointer"}}>-</span>
                      <span className='mx-2'>{1}</span>
                      <span className='px-1 mx-1 border-start' style={{cursor:"pointer"}}>+</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row d-flex">
                      <h6 className="col-md-6 card-title mt-1">Veg Pried Rice</h6>
                      <p className='col-md-6'>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star-half-alt text-warning"></span>
                      </p>
                    </div>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, cum?</p>
                    <p className="card-text"><h5><span className=" text-primary">$12</span></h5></p>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="card border-0 shadow">
                  <div className='' style={{position:"relative"}}>
                    <img className="card-img-top" src="img/about-4.jpg" alt="Card image cap" style={{width: "100%"}}/>
                    <div className='bg-white add-minus p-1'>
                      <span className='px-1 mx-1 border-end' style={{cursor:"pointer"}}>-</span>
                      <span className='mx-2'>{1}</span>
                      <span className='px-1 mx-1 border-start' style={{cursor:"pointer"}}>+</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row d-flex">
                      <h6 className="col-md-6 card-title mt-1">Veg Pried Rice</h6>
                      <p className='col-md-6'>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star-half-alt text-warning"></span>
                      </p>
                    </div>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, cum?</p>
                    <p className="card-text"><h5><span className=" text-primary">$12</span></h5></p>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="card border-0 shadow">
                  <div className='' style={{position:"relative"}}>
                    <img className="card-img-top" src="img/about-4.jpg" alt="Card image cap" style={{width: "100%"}}/>
                    <div className='bg-white add-minus p-1'>
                      <span className='px-1 mx-1 border-end' style={{cursor:"pointer"}}>-</span>
                      <span className='mx-2'>{1}</span>
                      <span className='px-1 mx-1 border-start' style={{cursor:"pointer"}}>+</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row d-flex">
                      <h6 className="col-md-6 card-title mt-1">Veg Pried Rice</h6>
                      <p className='col-md-6'>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star-half-alt text-warning"></span>
                      </p>
                    </div>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, cum?</p>
                    <p className="card-text"><h5><span className=" text-primary">$12</span></h5></p>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="card border-0 shadow">
                  <div className='' style={{position:"relative"}}>
                    <img className="card-img-top" src="img/about-4.jpg" alt="Card image cap" style={{width: "100%"}}/>
                    <div className='bg-white add-minus p-1'>
                      <span className='px-1 mx-1 border-end' style={{cursor:"pointer"}}>-</span>
                      <span className='mx-2'>{1}</span>
                      <span className='px-1 mx-1 border-start' style={{cursor:"pointer"}}>+</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row d-flex">
                      <h6 className="col-md-6 card-title mt-1">Veg Pried Rice</h6>
                      <p className='col-md-6'>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star-half-alt text-warning"></span>
                      </p>
                    </div>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, sit?</p>
                    <p className="card-text"><span className="text-primary">$12</span></p>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="card border-0 shadow">
                  <div className='' style={{position:"relative"}}>
                    <img className="card-img-top" src="img/about-4.jpg" alt="Card image cap" style={{width: "100%"}}/>
                    <div className='bg-white add-minus p-1'>
                      <span className='px-1 mx-1 border-end' style={{cursor:"pointer"}}>-</span>
                      <span className='mx-2'>{1}</span>
                      <span className='px-1 mx-1 border-start' style={{cursor:"pointer"}}>+</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row d-flex">
                      <h6 className="col-md-6 card-title mt-1">Veg Pried Rice</h6>
                      <p className='col-md-6'>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star-half-alt text-warning"></span>
                      </p>
                    </div>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolorem.</p>
                    <p className="card-text"><h5><span className=" text-primary">$12</span></h5></p>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="card border-0 shadow">
                  <div className='' style={{position:"relative"}}>
                    <img className="card-img-top" src="img/about-4.jpg" alt="Card image cap" style={{width: "100%"}}/>
                    <div className='bg-white add-minus p-1'>
                      <span className='px-1 mx-1 border-end' style={{cursor:"pointer"}}>-</span>
                      <span className='mx-2'>{1}</span>
                      <span className='px-1 mx-1 border-start' style={{cursor:"pointer"}}>+</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row d-flex">
                      <h6 className="col-md-6 card-title mt-1">Veg Pried Rice</h6>
                      <p className='col-md-6'>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star-half-alt text-warning"></span>
                      </p>
                    </div>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, placeat?</p>
                    <p className="card-text"><h5><span className=" text-primary">$12</span></h5></p>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="card border-0 shadow">
                  <div className='' style={{position:"relative"}}>
                    <img className="card-img-top" src="img/about-4.jpg" alt="Card image cap" style={{width: "100%"}}/>
                    <div className='bg-white add-minus p-1'>
                      <span className='px-1 mx-1 border-end' style={{cursor:"pointer"}}>-</span>
                      <span className='mx-2'>{1}</span>
                      <span className='px-1 mx-1 border-start' style={{cursor:"pointer"}}>+</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row d-flex">
                      <h6 className="col-md-6 card-title mt-1">Veg Pried Rice</h6>
                      <p className='col-md-6'>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star-half-alt text-warning"></span>
                      </p>
                    </div>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, earum?</p>
                    <p className="card-text"><h5><span className=" text-primary">$12</span></h5></p>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="card border-0 shadow">
                  <div className='' style={{position:"relative"}}>
                    <img className="card-img-top" src="img/about-4.jpg" alt="Card image cap" style={{width: "100%"}}/>
                    <div className='bg-white add-minus p-1'>
                      <span className='px-1 mx-1 border-end' style={{cursor:"pointer"}}>-</span>
                      <span className='mx-2'>{1}</span>
                      <span className='px-1 mx-1 border-start' style={{cursor:"pointer"}}>+</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row d-flex">
                      <h6 className="col-md-6 card-title mt-1">Veg Pried Rice</h6>
                      <p className='col-md-6'>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star-half-alt text-warning"></span>
                      </p>
                    </div>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptatibus, ea!</p>
                    <p className="card-text"><h5><span className=" text-primary">$12</span></h5></p>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="card border-0 shadow">
                  <div className='' style={{position:"relative"}}>
                    <img className="card-img-top" src="img/about-4.jpg" alt="Card image cap" style={{width: "100%"}}/>
                    <div className='bg-white add-minus p-1'>
                      <span className='px-1 mx-1 border-end' style={{cursor:"pointer"}}>-</span>
                      <span className='mx-2'>{1}</span>
                      <span className='px-1 mx-1 border-start' style={{cursor:"pointer"}}>+</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row d-flex">
                      <h6 className="col-md-6 card-title mt-1">Veg Pried Rice</h6>
                      <p className='col-md-6'>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star-half-alt text-warning"></span>
                      </p>
                    </div>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, temporibus.</p>
                    <p className="card-text"><h5><span className=" text-primary">$12</span></h5></p>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="card border-0 shadow">
                  <div className='' style={{position:"relative"}}>
                    <img className="card-img-top" src="img/about-4.jpg" alt="Card image cap" style={{width: "100%"}}/>
                    <div className='bg-white add-minus p-1'>
                      <span className='px-1 mx-1 border-end' style={{cursor:"pointer"}}>-</span>
                      <span className='mx-2'>{1}</span>
                      <span className='px-1 mx-1 border-start' style={{cursor:"pointer"}}>+</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row d-flex">
                      <h6 className="col-md-6 card-title mt-1">Veg Pried Rice</h6>
                      <p className='col-md-6'>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star-half-alt text-warning"></span>
                      </p>
                    </div>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, porro.</p>
                    <p className="card-text"><h5><span className=" text-primary">$12</span></h5></p>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="card border-0 shadow">
                  <div className='' style={{position:"relative"}}>
                    <img className="card-img-top" src="img/about-4.jpg" alt="Card image cap" style={{width: "100%"}}/>
                    <div className='bg-white add-minus p-1'>
                      <span className='px-1 mx-1 border-end' style={{cursor:"pointer"}}>-</span>
                      <span className='mx-2'>{1}</span>
                      <span className='px-1 mx-1 border-start' style={{cursor:"pointer"}}>+</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row d-flex">
                      <h6 className="col-md-6 card-title mt-1">Veg Pried Rice</h6>
                      <p className='col-md-6'>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star text-warning"></span>
                        <span className="fas fa-star-half-alt text-warning"></span>
                      </p>
                    </div>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, porro.</p>
                    <p className="card-text"><h5><span className=" text-primary">$12</span></h5></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Menu End */}
        {/* Footer Start */}
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
                <Link className="btn btn-link" href>About Us</Link>
                <Link className="btn btn-link" href>Contact Us</Link>
                <Link className="btn btn-link" href>Reservation</Link>
                <Link className="btn btn-link" href>Privacy Policy</Link>
                <Link className="btn btn-link" href>Terms &amp; Condition</Link>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
                <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
                <div className="d-flex pt-2">
                  <Link className="btn btn-outline-light btn-social" href><i className="fab fa-twitter" /></Link>
                  <Link className="btn btn-outline-light btn-social" href><i className="fab fa-facebook-f" /></Link>
                  <Link className="btn btn-outline-light btn-social" href><i className="fab fa-youtube" /></Link>
                  <Link className="btn btn-outline-light btn-social" href><i className="fab fa-linkedin-in" /></Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
                <h5 className="text-light fw-normal">Monday - Saturday</h5>
                <p>09AM - 09PM</p>
                <h5 className="text-light fw-normal">Sunday</h5>
                <p>10AM - 08PM</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <div className="position-relative mx-auto" style={{maxWidth: 400}}>
                  <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                  <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  © <Link className="border-bottom" to="#">Your Site Name</Link>, All Right Reserved. 
                  {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                  Designed By <Link className="border-bottom" to="https://htmlcodex.com">HTML Codex</Link><br /><br />
                  Distributed By <Link className="border-bottom" to="https://themewagon.com" target="_blank">ThemeWagon</Link>
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <div className="footer-menu">
                    <Link href>Home</Link>
                    <Link href>Cookies</Link>
                    <Link href>Help</Link>
                    <Link href>FQAs</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Booking;
