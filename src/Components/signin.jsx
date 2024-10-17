import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Login.css';

const Mysign = () => {
    return (
        <>
        
            <div className="container mt-5 d-flex justify-content-center align-items-center">
                <div class="login-box">
                    <p>Register</p>
                        <form>
                            <div class="row">
                                <div class="col-6 user-box">
                                    <input required="" name="firstname" type="text"></input>
                                    <label>First Name</label>
                                </div>

                                <div class="col-6 user-box">
                                    <input required="" name="lastname" type="text"></input>
                                    <label>Last Name</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6 user-box">
                                    <input required="" name="email" type="email"></input>
                                    <label>Email</label>
                                </div>

                                <div class="col-6 user-box">
                                    <input required="" name="phone" type="text"></input>
                                    <label>Phone Number</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6 user-box">
                                    <input required="" name="password" type="password"></input>
                                    <label>Password</label>
                                </div>

                                <div class="col-6 user-box">
                                    <input required="" name="confirm_password" type="password"></input>
                                    <label>Confirm Password</label>
                                </div>
                            </div>

                            <p class = "fw-bold text-white">To verify your Email, we will send you a mail with a temporary code. Message and data rates may apply.</p>
                            <a href="link">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                    Verify
                            </a>
                        </form>
                        <p class="fw-bold">Already have an account? <Link to="/login" className="a2">Log in</Link></p>
                </div>
            </div>
        </>
    )
}

export default Mysign;