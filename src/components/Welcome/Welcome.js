import React,{useState} from 'react'
import './Welcome.css'
import Meeting from '../../assets/Images/meeting.svg'
import Pending from '../../assets/Images/pending.svg'
import Calender from '../../assets/Images/calender.svg'
import Confirmed from '../../assets/Images/confirmed.svg'
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom'
import { Calendar, Badge } from 'rsuite';


const Welcome = () => {
    const navigate=useNavigate()
  
    return (
        <div className='welcome-container'>
            <h3>Hi Esther </h3>
            <h5 className='text-red-500' >Welcome</h5>
            <p className='meetings'>Check your upcoming meetings <br />and prepare for it</p>
            <div className='menu'>
                <div>
                

                        <img src={Meeting} alt='schedule' onClick={() => navigate('/ClientDetails')} />
        
                    <p>Schedule</p>
                </div>

                <div className='pending'>
                
                        <img src={Pending} alt='pending'  onClick={() => navigate('/Pending')} />
                    
                    <p>Pending</p>
                </div>
            </div>
            <div className='menu'>
                <div>
                
                    <img src={Calender} alt='schedule'  onClick={() => navigate('/Confirmd')} />
            
                    <p>Confirmed</p>
                </div>
                <div className='calender'>
        
                    <img src={Confirmed} alt='pending'  onClick={() => navigate('/Calendarcomponent')} />
        
                    <p>Calendar</p>
                </div>
            </div>
            <div className='logout'>
                <p>Logout &nbsp;&nbsp;<FiLogOut className='log-icon' /></p>
            </div>

        </div>
        

    )
}
export default Welcome