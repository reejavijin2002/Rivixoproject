import React,{useState} from 'react'
import './ScheduleMeet.css'
import Creater from '../../assets/Images/creater.png'
import { IoMdAdd } from "react-icons/io";
import Modal from 'react-bootstrap/Modal';
import Member from '../../assets/Images/member.png'
import { GoDotFill } from "react-icons/go";
import { MdOutlineAddBox } from "react-icons/md";
import { FaRegSquareMinus } from "react-icons/fa6";
import { DatePicker,TimePicker,Select } from 'antd';
import { FaLocationDot } from "react-icons/fa6";

const MemberDetails = () => {
    const [show, setShow] = useState(true);
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const cancelHandler = () =>{
        setShow(false)
    }
    const addMemberHandler = () =>{
        setShow(true)
    }
    return (
        <div className='member-detail-wrapper'>
            <Modal show={show} onHide={handleClose} centered >
              
                <Modal.Body dialogClassName='member-list'>
                    <div className='member-detail padd-20'>
                        <img src={Member} alt='member'/>
                        <div className='details'>
                            <h3 style={{marginLeft:'0px',marginBottom:'0px',marginTop:'10px'}}>Guy Hawkins</h3>
                            <p style={{marginLeft:'-30px'}}>Technical</p>
                        </div>
                       <div className='status'> <GoDotFill size={25}/>available</div>
                       <FaRegSquareMinus size={35} color='#8D8D8D' className='add-action'/>
                    </div>
                    <div className='member-detail padd-20'>
                        <img src={Member} alt='member'/>
                        <div className='details'>
                            <h3 style={{marginLeft:'0px',marginBottom:'0px',marginTop:'10px'}}>Guy Hawkins</h3>
                            <p style={{marginLeft:'-30px'}}>Technical</p>
                        </div>
                       <div className='status-unavlble'> <GoDotFill size={25}/>unavailable<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3:00 - 5:00
                      </div>
                       <MdOutlineAddBox size={35} color='#8D8D8D' className='add-action'/>
                    </div>
                    <div className='member-detail padd-20'>
                        <img src={Member} alt='member'/>
                        <div className='details'>
                            <h3 style={{marginLeft:'0px',marginBottom:'0px',marginTop:'10px'}}>Guy Hawkins</h3>
                            <p style={{marginLeft:'-30px'}}>Technical</p>
                        </div>
                       <div className='status'> <GoDotFill size={25}/>available</div>
                       <MdOutlineAddBox size={40} color='#8D8D8D' className='add-action'/>
                    </div>
                    <div className='member-detail'>
                        <div className='cancel' onClick={cancelHandler}>Cancel</div>
                        <div className='done'>Done</div>
                    </div>
                    </Modal.Body>
                
            </Modal>
            <div className='member-detail'>
                <div className='d-flex'>
                    <img src={Creater} alt='creater' />
                    <div className='details'>
                        <h3>Guy Hawkins</h3>
                        <p>Technical</p>
                    </div>
                </div>
                <Select
                    defaultValue="Member"
                    onChange={handleChange}
                    style={{ marginTop: '12px', background: '#fff' }}
                    options={[
                        {
                            value: 'Member',
                            label: 'Member',
                        },
                        {
                            value: 'Creator',
                            label: 'Creator',
                        },
                        {
                            value: 'Lead',
                            label: 'Lead',
                        },
                    ]}
                />
            </div>
            <div className='add-member' onClick={addMemberHandler}><IoMdAdd size={25} />&nbsp;&nbsp;Add Members</div>
            <div className='d-flex justify-content-center'>
            <p className='lead-select-label'>Select a Lead before creating meeting</p>
            </div>
            
            <div className='create-btn'>Create Meeting</div>

        </div>

    )
}
export default MemberDetails