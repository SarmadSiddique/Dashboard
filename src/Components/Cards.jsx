import React from 'react'
import "./Card.css";
import { BsFillCalendar2CheckFill } from 'react-icons/bs'
import { IoStatsChart } from 'react-icons/io5';
import { FiActivity } from 'react-icons/fi';
import {Col , Row } from "react-bootstrap"

function Cards(prop) {
    const bgcolor = {
        backgroundColor: "black",

    }
    const overflow = {
        overflow: "hidden"
    }
    return (
        <>
        <Row>       
        <Col md={12} xs={12}>
        <div  className="card  mt-2">
                <div className="main  ">
                    <div className="content ">
                        <span>{prop.living}</span>
                        <span className='price'>{prop.price}</span>
                    </div>
                    <div className="icon">
                        {prop.icon}
                    </div>

                </div>
            </div>
        </Col>
        </Row>
        </>
    )
}

export default Cards