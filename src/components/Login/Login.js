import React, { useState } from 'react'
import './Login.css'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Switch } from 'antd';
import Button from '../UI/Button/Button'
import { Link } from 'react-router-dom';

const Login = () => {
    const [show, setShow] = useState(true)
    const visibilityHandler = (mode) => { setShow(mode) }
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <React.Fragment>
            <div className='container-fluid nopad mobile-view'>
                <div className='Login'>
                    <h3>Welcome back </h3>
                    <p>Enter your username and password</p>
                    <div alt='curve' className='img-fluid login-curve' >
                        <div className='logForm'>
                            <input type='text' className='input' placeholder='Username' />
                            <div className='d-flex'>
                                <input type={show ? 'password' : 'text'} className='inputpsw' placeholder='Enter password' />
                                {show ? <FaEyeSlash className='pswd-visblty' onClick={() => visibilityHandler(false)} /> : <FaEye className='pswd-visblty' onClick={() => visibilityHandler(true)} />}
                            </div>
                            <div className='remember'>
                                <p>Remember me&nbsp;&nbsp;</p>
                                <Switch onChange={onChange} className='toggle' />
                            </div>
                            <Link to='welcome'>
                                <Button name='Login' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid web-view'>
                <div className='row login-bg'>
                    <div className='col-md-4 welcome '>
                        <h6>Welcome back </h6>
                        <p>enter your username and password</p>
                    </div>
                    <div className='col-md-8 login-right-curve'>
                        <div >
                            <div className='logForm-mob'>
                                <input type='text' className='input-mob' placeholder='Username' />
                            </div>
                            <div className='logForm-mob-pswd'>
                                <input type={show ? 'password' : 'text'} className='input-mob-pswd' placeholder='Enter password' />
                                {show ? <FaEyeSlash className='pswd-visblty' onClick={() => visibilityHandler(false)} /> : <FaEye className='pswd-visblty' onClick={() => visibilityHandler(true)} />}
                            </div>
                            <div className='remember'>
                                <p>Remember me&nbsp;&nbsp;</p>
                                <Switch onChange={onChange} className='toggle' />
                            </div>
                            <div className='logForm-mob'>
                                <Button name='Login' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Login