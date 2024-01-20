import React, { useState } from "react";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Switch } from "antd";
import Button from "../UI/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik, useFormik, validateYupSchema } from "formik";
import { ValidationError } from "yup";
import validator from "validator";
import Password from "antd/es/input/Password";

const Login = () => {
  const [show, setShow] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  const usernameHandler = (e) => {
    setUsername(e.target.value);

  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    
  };
  const visibilityHandler = (mode) => {
    setShow(mode);
  };
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const navigate = useNavigate();

  const validateForm = (values) => {
    const errors = {};
    if (!username) {
      errors.Username = "Username is required";
    }
    if (!password) {
      errors.Password = "Password is required";
    }
    return errors;
  };

  const onsubmitHandler = (e) => {
    
    
    const dammyUsername = "vijay";
    const dammyPassword = "vijay@24";
    console.log("username",username);
    console.log("password",password);


    if (username === dammyUsername && password === dammyPassword) {
      navigate("/welcome");
    }
  };

  return (
    <React.Fragment>
      <div className="container-fluid nopad mobile-view">
        <div className="Login">
          <h3>Welcome back </h3>
          <p>Enter your username and password</p>
          <div alt="curve" className="img-fluid login-curve">
            <Formik
              initialValues={{
                Username: "",
                Password: "",
              }}
              validate={validateForm}
              onSubmit={onsubmitHandler}
              
            >
              {(formik) => (
                <Form className="logForm" onSubmit={formik.handleSubmit}>
                  <Field
                    name="Username"
                    className={username ? "input is-invalid" : "input"}
                    placeholder="Username"
                    id="username"
                    value={username}
                    onChange={usernameHandler}
                  />
                  {!username ? (
                    <div className="validate">{formik.errors.Username}</div>
                  ) : null}

                  <div className="d-flex">
                    <Field
                      type={show ? "password" : "text"}
                      name="Password"
                      className={password ? "inputpsw is-invalid" : "inputpsw"}
                      placeholder="Enter Password"
                      id="password"
                      value={password}
                      onChange={passwordHandler}
                    />

                    {show ? (
                      <FaEyeSlash
                        className="pswd-visblty"
                        onClick={() => visibilityHandler(false)}
                      />
                    ) : (
                      <FaEye
                        className="pswd-visblty"
                        onClick={() => visibilityHandler(true)}
                      />
                    )}
                  </div>
                  {!password  ? (
                    <div className="validate">{formik.errors.Password}</div>
                  ) : null}
                  <div className="remember">
                    <p>Remember me&nbsp;&nbsp;</p>
                    <Switch onChange={onChange} className="toggle" />
                  </div>

                  <div onClick={(e) => formik.handleSubmit(username && password ?onsubmitHandler():null)}>
                    <Button name="Login" />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div className="container-fluid web-view">
        <div className="row login-bg">
          <div className="col-md-4 welcome ">
            <h6>Welcome back </h6>
            <p>Enter your username and password</p>
          </div>
          <div className="col-md-8 login-right-curve">
            <Formik
              initialValues={{
                Username: "",
                Password: "",
              }}
              validate={validateForm}
              onSubmit={onsubmitHandler}
            >
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  <div className="logForm-mob">
                    <Field
                      name="Username"
                      className={
                        !username ? "input-mob is-invalid" : "input-mob"
                      }
                      placeholder="Username"
                      id="username"
                      onChange={usernameHandler}
                      value={username}
                    />
                  </div>
                  {!username  ? (
                    <div className="validate1">{formik.errors.Username}</div>
                  ) : null}
                  <div className="logForm-mob-pswd">
                    <Field
                      type={show ? "password" : "text"}
                      placeholder="Enter password"
                      name="Password"
                      className={
                        !password
                          ? "input-mob-pswd is-invalid"
                          : "input-mob-pswd"
                      }
                      id="password"
                      onChange={passwordHandler}
                      value={password}
                    />
                    {show ? (
                      <FaEyeSlash
                        className="pswd-visblty"
                        onClick={() => visibilityHandler(false)}
                      />
                    ) : (
                      <FaEye
                        className="pswd-visblty"
                        onClick={() => visibilityHandler(true)}
                      />
                    )}
                  </div>
                  {!password  ? (
                    <div className="validate1">{formik.errors.Password}</div>
                  ) : null}
                  <div className="remember">
                    <p>Remember me&nbsp;&nbsp;</p>
                    <Switch onChange={onChange} className="toggle" />
                  </div>

                  <div
                    className="logForm-mob"
                    onClick={(e) => formik.handleSubmit(username && password ?onsubmitHandler():null)}
                  >
                    <Button name="Login" />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Login;
