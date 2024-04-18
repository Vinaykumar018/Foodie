import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, []);

    return (

        <div className="container-fluid bg-dark w-100 vh-100 d-flex justify-content-center align-items-center">
          {/*spinner start */}
          {loading && (
        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
          {/*spinner end */}
         
           {/*login start */}
           {!loading && (
             <>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="wow fadeInUp" data-wow-delay="0.2s">
                        <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
                        <h1 className="text-white mb-4">Sign Up Here</h1>
                        <form>
                            <div className="row g-2">
                                <div className="col-md-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" placeholder="Username"/>
                                        <label for="name">User Name</label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" placeholder="Email Id"/>
                                        <label for="name">Email ID</label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="phone" placeholder="Mobile No"/>
                                        <label for="name">Mobile Number</label>
                                    </div>
                                </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="password" placeholder="Password"/>
                                            <label for="password">Password</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="password" placeholder="Password"/>
                                        <label for="password">Confirm Password</label>
                                    </div>
                                </div>
                                    <div className="col-md-12">
                                        <div class="d-flex justify-content-start text-muted pt-1">
                                            <span><input type="checkbox" name="" id="" className="fs-2" style={{cursor:"pointer"}}/><span class="mx-2 fs-5">I Agree to Term & Condition</span></span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Sign Up</button>
                                    </div>
                                    <div className="col-12">
                                        <span className='d-flex justify-content-center fs-5'>Already have an account?<Link to="/"><span class="fs-5 mx-2">sign in</span></Link></span>
                                    </div>
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
        </>)}
    </div>
    );
}

export default Signup;
