import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

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
             <div className="row">
             <div className="col-md-12 d-flex justify-content-center align-items-center">
                 <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                     <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
                     <h1 className="text-white mb-4">Sign In Here</h1>
                     <form>
                         <div className="row g-3">
                             <div className="col-md-12">
                                 <div className="form-floating">
                                     <input type="text" className="form-control" id="name" placeholder="Username"/>
                                     <label for="name">User Name</label>
                                 </div>
                             </div>
                             <div className="col-md-12">
                                 <div className="form-floating">
                                     <input type="password" className="form-control" id="password" placeholder="Password"/>
                                     <label for="password">Password</label>
                                 </div>
                                 <span class="d-flex justify-content-end mt-2 text-muted" style={{cursor:"pointer"}}>forget password ?</span>
                             </div>
                             <div className="col-12">
                                 <button className="btn btn-primary w-100 py-3" type="submit">Sign In</button>
                             </div>
                         </div> 
                         <div class="text-center mt-2 text-light">or continue with</div>
                         <div className="row g-3 mt-2">
                            <div className="col-md-4">
                                <div className="form-floating">
                                    <div className="bg-white py-2 rounded-pill text-center" style={{cursor:"pointer"}}>Google</div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-floating">
                                    <div className="bg-white py-2 rounded-pill text-center" style={{cursor:"pointer"}}>Fackbook</div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-floating ">
                                    <div className="bg-white py-2 rounded-pill text-center" style={{cursor:"pointer"}}>Twitter</div>
                                </div>
                            </div>
                         </div>
                         <div className='row my-2'>
                            <div className="col-12">
                                <span className='d-flex justify-content-center fs-5'>Don't have an account?<Link to="/signup"><span class="fs-5 mx-2">sign up</span></Link></span>
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

export default Login;
