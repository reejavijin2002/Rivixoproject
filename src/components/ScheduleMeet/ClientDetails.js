import React from 'react'
import './ScheduleMeet.css'
import { FaArrowLeft } from "react-icons/fa6";
import { DatePicker, TimePicker, Select } from 'antd';
import { FaLocationDot } from "react-icons/fa6";
const ClientDetails = () => {
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <div className='container client-detail-pad'>
            <div className='row'>
                <div className='col-md-6'>
                    <FaArrowLeft className='prev-arrow' />
                    <h3>Client details</h3>
                    <form className='meeting-form'>
                        <label>Client Name:</label><br />
                        <input type='text' className='meeting-input' />
                        <label>Company Name:</label><br />
                        <input type='text' className='meeting-input' />
                        <label>Email ID:</label><br />
                        <input type='text' className='meeting-input' />
                        <label>Mobile No:</label><br />
                        <input type='number' className='meeting-input' />
                        <label>Referred By:</label><br />
                        <input type='number' className='meeting-input' />
                    </form>
                </div>
                <div className='col-md-6'>
                    <h3 className='pad-20'>Meeting details</h3>
                    <form className='meeting-form'>
                        <label>Title</label><br />
                        <input type='text' className='meeting-input' />
                        <div className='row'>
                            <div className='col-4'>
                                <label>Date</label>
                                <DatePicker onChange={onChange} suffixIcon={null} className='meeting-input' />
                            </div>
                            <div className='col-4'>
                                <label>Start time</label>
                                <TimePicker className='meeting-input' format="h:mm a" showTime={false} />
                            </div>
                            <div className='col-4'>
                                <label>End time</label>
                                <TimePicker className='meeting-input' format="h:mm a" showTime={false} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <label>Travelling time</label>
                                <input type='text' className='meeting-input' />
                            </div>
                            <div className='col-6'>
                                <Select
                                    defaultValue=""
                                    className='meeting-input' style={{ marginTop: '43px' }}
                                    onChange={handleChange}
                                    options={[
                                        {
                                            value: 'Hours',
                                            label: 'Hours',
                                        },
                                        {
                                            value: 'Minute',
                                            label: 'Minute',
                                        },

                                    ]}
                                />
                            </div>
                        </div>
                        <label>Location</label><br />
                        <div className='d-flex'>
                            <input type='text' className='meeting-input' /><FaLocationDot className='location-icon' />
                        </div>
                        <button className='client-detail-btn'>Next</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ClientDetails