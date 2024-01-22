import React, { useState } from "react";
import "./ScheduleMeet.css";
import { FaArrowLeft } from "react-icons/fa6";
import { DatePicker, TimePicker, Select } from "antd";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
const ClientDetails = () => {
  const [clientname, setClientname] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [reffered, setReffered] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [traveltime, setTraveltime] = useState("");
  const [location, setLocation] = useState("");

  const onChange = (date, dateString, e) => {
    console.log(date, dateString);
    setDate(date);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const navigate = useNavigate();

  const initialValues1 = {
    clientname: "",
    companyname: "",
    email: "",
    number: "",
    reffered: "",
    title: "",
    date: "",
    start: "",
    end: "",
    traveltime: "",
    location: "",
  };
  const clientnamehandler = (e) => {
    setClientname(e.target.value);
  };
  const companynamehandler = (e) => {
    setCompanyname(e.target.value);
  };
  const emailhandler = (e) => {
    setEmail(e.target.value);
  };
  const numberhandler = (e) => {
    setNumber(e.target.value);
  };
  const refferedhandler = (e) => {
    setReffered(e.target.value);
  };
  const titlehandler = (e) => {
    setTitle(e.target.value);
  };
  const datehandler = (e) => {
    setDate(e.target.value);
  };
  const starthandler = (showTime) => {
    setStart(showTime);
  };
  const endhandler = (showTime) => {
    setEnd(showTime);
  };
  const traveltimehandler = (e) => {
    setTraveltime(e.target.value);
  };
  const locationhandler = (e) => {
    setLocation(e.target.value);
  };

  const validateform = () => {
    const errors = {};
    if (!clientname) {
      errors.clientname = "Clientname required";
    }
    if (!companyname) {
      errors.companyname = "Companyname required";
    }
    if (!email) {
      errors.email = "Email required";
    }
    if (!number) {
      errors.number = "Number required";
    }
    if (!reffered) {
      errors.reffered = "Refferel required";
    }
    if (!title) {
      errors.title = "Title required";
    }
    if (!date) {
      errors.date = "Required";
    }
    if (!start) {
      errors.start = "Required";
    }
    if (!end) {
      errors.end = "Required";
    }
    if (!traveltime) {
      errors.traveltime = "Travel time required";
    }
    if (!location) {
      errors.location = "Location required";
    }
    return errors;
  };
 
  const submitFunction = () => {
    const formData={
        "clientname":clientname,
        "companyname":companyname,
        "email":email,
        "number":number,
        "reffered":reffered,
        "title":title,
        "date":date,
        "start":start,
        "end":end,
        "traveltime":traveltime,
        "location":location
        
    }
    console.log(formData,"rocky");
    navigate("/MemberDetails");
  };
  return (
    <div className="container client-detail-pad">
      <Formik
        initialValues={initialValues1}
        validate={validateform}
        onSubmit={submitFunction}
      >
        {(formik) => (
          <Form className="row" onSubmit={formik.handleSubmit}>
            <div className="col-md-6">
              <FaArrowLeft
                className="prev-arrow"
                onClick={() => navigate("/welcome")}
              />
              <h3>Client details</h3>
              <form className="meeting-form">
                <label>Client Name:</label>
                <br />
                <Field
                  type="text"
                  className="meeting-input"
                  value={clientname}
                  onChange={clientnamehandler}
                />
                {!clientname ? (
                  <div className="validate">{formik.errors.clientname}</div>
                ) : null}
                <label>Company Name:</label>
                <br />
                <Field
                  type="text"
                  className="meeting-input"
                  value={companyname}
                  onChange={companynamehandler}
                />
                {!companyname ? (
                  <div className="validate">{formik.errors.companyname}</div>
                ) : null}
                <label>Email ID:</label>
                <br />
                <Field
                  type="text"
                  className="meeting-input"
                  value={email}
                  onChange={emailhandler}
                />
                {!email ? (
                  <div className="validate">{formik.errors.email}</div>
                ) : null}
                <label>Mobile No:</label>
                <br />
                <Field
                  type="phone"
                  className="meeting-input"
                  value={number}
                  onChange={numberhandler}
                />
                {!number ? (
                  <div className="validate">{formik.errors.number}</div>
                ) : null}
                <label>Referred By:</label>
                <br />
                <Field
                  type="text"
                  className="meeting-input"
                  value={reffered}
                  onChange={refferedhandler}
                />
                {!reffered ? (
                  <div className="validate">{formik.errors.reffered}</div>
                ) : null}
              </form>
            </div>
            <div className="col-md-6">
              <h3 className="pad-20">Meeting details</h3>
              <form className="meeting-form">
                <label>Title</label>
                <br />
                <Field
                  type="text"
                  className="meeting-input"
                  value={title}
                  onChange={titlehandler}
                />
                {!title ? (
                  <div className="validate">{formik.errors.title}</div>
                ) : null}
                <div className="row">
                  <div className="col-4">
                    <label>Date</label>
                    <DatePicker
                      onChange={onChange}
                      value={date}
                      suffixIcon={null}
                      className="meeting-input"
                    />
                    {!date ? (
                      <div className="validate">{formik.errors.date}</div>
                    ) : null}
                  </div>
                  <div className="col-4">
                    <label>Start time</label>
                    <TimePicker
                      className="meeting-input"
                      format="h:mm a"
                      showTime={false}
                      onChange={starthandler}
                      value={start}
                    />
                    {!start ? (
                      <div className="validate">{formik.errors.start}</div>
                    ) : null}
                  </div>
                  <div className="col-4">
                    <label>End time</label>
                    <TimePicker
                      className="meeting-input"
                      format="h:mm a"
                      showTime={false}
                      onChange={endhandler}
                      value={end}
                    />
                    {!end ? (
                      <div className="validate">{formik.errors.end}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label>Travelling time</label>
                    <Field
                      type="text"
                      className="meeting-input"
                      value={traveltime}
                      onChange={traveltimehandler}
                    />
                    {!traveltime ? (
                      <div className="validate">{formik.errors.traveltime}</div>
                    ) : null}
                  </div>
                  <div className="col-6">
                    <Select
                      defaultValue=""
                      className="meeting-input"
                      style={{ marginTop: "43px" }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "Hours",
                          label: "Hours",
                        },
                        {
                          value: "Minute",
                          label: "Minute",
                        },
                      ]}
                    />
                  </div>
                </div>
                <label>Location</label>
                <br />
                <div className="d-flex">
                  <Field
                    type="text"
                    className="meeting-input"
                    value={location}
                    onChange={locationhandler}
                  />
                  <FaLocationDot className="location-icon" />
                </div>
                {!location ? (
                  <div className="validate">{formik.errors.location}</div>
                ) : null}
                <button
                  type="submit"
                  className="client-detail-btn"
                  onClick={(e) =>
                    formik.handleSubmit(e.preventDefault(),
                      clientname &&
                        companyname &&
                        email &&
                        number &&
                        reffered &&
                        title &&
                        date &&
                        start &&
                        end &&
                        traveltime &&
                        location
                        ? submitFunction()
                        : null
                    )
                  }
                >
                  Next
                </button>
              </form>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default ClientDetails;
