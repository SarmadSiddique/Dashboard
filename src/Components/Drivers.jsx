import "./Drivers.css"
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { IoMdCash } from "react-icons/io";
const hdriver={
    height:"auto",
    overFlow:"none"
}
const Ddata = [
    {
        icon: <AiFillCalendar />,
        text: "How to manage time and get good marks trip"
    },
    {
        icon: <MdTimelapse />,
        text: "How to regulate transaction our time"
    },
    {
        icon: <IoMdCash />,
        text: "Withdrawing money through ATM"
    }
]

export default function Drivers() {
    return (
        <>
            <div style={hdriver} className="driver  mt-2">
                <span className="info">Information for Drivers</span>

                {Ddata.map((Ddata) => {
                    return (
                        <>
                            <div className="data">
                                <div className="information">
                                    {/* <div className="line"></div> */}
                                    {Ddata.icon}
                                    {Ddata.text}

                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </>
                    )
                })}

            </div>
        </>
    )
}
