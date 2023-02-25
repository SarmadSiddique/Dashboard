import React, { useState } from 'react'
import styled from 'styled-components'
import { MdspaceDashboard } from "react-icons/md"
import { RiDashboard2Fill } from "react-icons/ri"
import { FaAddressCard, FaTaxi } from "react-icons/fa"
import { GiTwirlCenter } from "react-icons/gi"
import { BsFillChatTextFill } from "react-icons/bs"
import { IoSettings } from "react-icons/io5"
import { FiLogOut } from "react-icons/fi"
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from "react-icons/vsc"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Sidbar.css"
import { Link } from 'react-router-dom'

const color = {
    color: "white"
}
function Sidebar() {
    const [link, setlink] = useState("")
    const active = () => {
        setlink(1);
    }
    return (
        <>




            <div className="top">
                <div className="brand">
                    <FaTaxi />
                    <span>Bus Tracking</span>
                </div>
                <div className="list_items">
                    <ul>
                        <li onClick={active} className={link === 1 ? "active" : ""}>
                            <Link to="/">
                                <RiDashboard2Fill />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li onClick={() => {
                            setlink(2)
                        }} className={link === 2 ? "active" : ""}>
                            <Link to="/dashboard">
                                <FaAddressCard />
                                <span>Bus Management</span>
                            </Link>
                        </li>
                        <li onClick={() => {
                            setlink(3)
                        }} className={link === 3 ? "active" : ""}>
                            <Link to="/card">
                                <GiTwirlCenter />
                                <span>Learning Center</span>
                            </Link>
                        </li> 
                          <li onClick={() => { setlink(4) }} className={link === 4 ? "active" : ""}>
                            <Link to="/graph">
                                <BsFillChatTextFill />
                                <span>  FAQs</span>
                            </Link>
                        </li>
                        <li onClick={() => {
                            setlink(5)
                        }} className={link === 5 ? "active" : ""}>
                            <Link to="#">
                                <IoSettings />
                                <span>Settings</span>
                            </Link>
                        </li> 


                    </ul>
                </div>
                <div className='logout' >
                    <Link className="logout_link" to="#">
                        <FiLogOut />
                        <span style={{ color: 'white' }}>Logout</span>
                    </Link>

                </div>
            </div>



        </>
    )
}


export default Sidebar