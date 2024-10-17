import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Login.css';


const MyLogin = () => {
    return (
        <>
        <div className="container mt-5 d-flex justify-content-center align-items-center">
        
            <div class="login-box">
                <p>Login</p>
                    <form>
                        <div class="user-box">
                            <input required="" name="" type="text"></input>
                            <label>Email</label>
                        </div>
                        <div class="user-box">
                            <input required="" name="" type="password"></input>
                            <label>Password</label>
                        </div>
                        <a href="#link">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                                Login
                        </a>
                    </form>
                    <p class="fw-bold">Don't have an account? <Link to="/Signin" className="a2">Signup</Link></p>
            </div>
        </div>
        </>
    );
    }

export default MyLogin;