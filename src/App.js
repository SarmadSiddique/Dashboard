import React from 'react'
import Dashboard from "./Components/Dashboard"
import Sidebar from './Components/Sidebar'
import styled from 'styled-components'
import Navbar from './Components/Navbar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "./Components/Cards"
import Drivers from './Components/Drivers'
import { BsFillCalendar2CheckFill } from 'react-icons/bs'
import { IoStatsChart } from 'react-icons/io5';
import { FiActivity } from 'react-icons/fi';
import { BiGroup } from 'react-icons/bi'
import Cdata from "./Components/Cdata"
import Graph from './Components/Graph'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import MainHeader from "./Components/MainHeader"
const width = {
  width: "100%",
  height: "20",
  overFlow: "hidden"
}

function App() {
  return (
    <>
<BrowserRouter>
        <Routes>
        <Route path="/" element={<MainHeader />}>
        <Route index element={<Home />}></Route>
            <Route path="/dashboard" element={
                <div className="main-content">
                <Col lg={{ offset: 0, span: 3 }} md={10} sm={12}>
                  <Card living="Spent  time here"
                    price="$689.0"
                    icon={<IoStatsChart />}
                  />
                  <Card
                    price="$350.87"
                    living="Earnings"
                    icon={<FiActivity />}
                  />
                </Col>
                <Col lg={{ offset: 0, span: 3 }} md={10} sm={12}>
                  <Card living="New Clients"
                    price="321"
                    icon={<BsFillCalendar2CheckFill />}
                  />
                  <Card
                    price="540.50"
                    living="Activity"
                    icon={<BiGroup />}
                  />
                </Col>
                <Col lg={{ offset: 0, span: 6 }} sm={12}>
                  <Drivers />
                </Col>

              </div>
            }></Route>
            <Route path="/card" element={<div>Contact PAGE</div>}></Route>
            <Route path="/graph" element={
              <div className=" mb-5 d-md-flex flex-direction-column  main-content mt-2">
                <Col className='mb-3 ' md={4} xs={12}>
                  <Graph />
                </Col>
                <Col className='mb-3 ' md={4} xs={12}><Graph /></Col>
                <Col className='mb-3 ' md={4} xs={12}><Graph /></Col>
              </div>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
        {/* <Row style={width} >
          <Col lg={2} md={2} xs={12}>
            <Sidebar />
          </Col>
          <Col className='px-5 mt-3' sm={{ offset: 0 }} lg={10} xs={12}>
            <Navbar />
            <Col md={12}>
              <div className="d-lg-flex ">
                <Col lg={{ offset: 0, span: 3 }} md={10} sm={12}>
                  <Card living="Spent  time here"
                    price="$689.0"
                    icon={<IoStatsChart />}
                  />
                  <Card
                    price="$350.87"
                    living="Earnings"
                    icon={<FiActivity />}
                  />
                </Col>
                <Col lg={{ offset: 0, span: 3 }} md={10} sm={12}>
                  <Card living="New Clients"
                    price="321"
                    icon={<BsFillCalendar2CheckFill />}
                  />
                  <Card
                    price="540.50"
                    living="Activity"
                    icon={<BiGroup />}
                  />
                </Col>
                <Col lg={{ offset: 0, span: 6 }} sm={12}>
                  <Drivers />
                </Col>

              </div>

              <div className="d-md-flex mt-2">
                <Col md={4} xs={12}>
                  <Graph />
                </Col>
                <Col md={4} xs={12}><Graph /></Col>
                <Col md={4} xs={12}><Graph /></Col>
              </div>
            </Col>


          </Col>
        </Row> */}
      {/* {Cdata.map((val)=>{
        return(<>
        <Card
             price={val.price}
               living={val.living}
               icon={val.icon}

              /> 
        </>)
      })} */}




    </>
  )
}

export default App
