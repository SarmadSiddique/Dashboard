import React from 'react'
import "./Transfer.css"
import sarmad from "../images/sarmad.jpg"
import daniel from "../images/daniel.jpg"
// import junaid from "../images/.jpg"

const Tdata = [
    {
        img: sarmad,
        title: "From Sarmad Jutt",
        time: "Today , 19:43"

    },
    {
        img: daniel,
        title: "From Daniel jutt",
        time: "Yesterday , 32:73"

    },
    {
        img: sarmad,
        title: "From Junaid Virk",
        time: "Tommorow , 17:63"
    }
]
function Transfer() {
    return (
        <>
            <div className="Tcard">
                <div className="heading">
                    <span>Your transfers</span>
                </div>
                <div className="">
                    {
                        Tdata.map((val) => {
                            return (
                                <>
                                    <div className="transfers row ">
                                        
                                        <div className="col-md-2 img">
                                            <img src={val.img} alt="" />
                                        </div>
                                        <div className="col-md-8  title">
                                        <span className='title2' >{val.title}</span>
                                        <br />
                                        <span style={{color:"white"}}>{val.time}</span>
                                        </div>

                                      <div className="col-md-2 ">
                                      
                                      </div>
                                        <br />
                                      
                                    </div>


                                </>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Transfer