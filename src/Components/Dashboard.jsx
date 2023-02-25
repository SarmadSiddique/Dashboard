import React from 'react'
import Card from "./Cards.jsx"
import {Row , Col } from "react-bootstrap"
import Navbar from './Navbar.jsx'
import { BsFillCalendar2CheckFill } from 'react-icons/bs'
import { IoStatsChart } from 'react-icons/io5';
import { FiActivity } from 'react-icons/fi';
import { BiGroup } from 'react-icons/bi'
import Transfer from './Transfer.jsx'
import Drivers from './Drivers.jsx'
import Graph from "./Graph"

function Dashboard() {
  return (
   <>
   <div className="main-content ">
   <Row>
  <Col className='px-5 mt-3'  lg={12} xs={12}>
            <Navbar />
            <Col md={12}>
              <div className="d-lg-flex ">
                <Col lg={{ offset: 0, span: 3 }} md={{span:12}}  sm={12}>
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
                <Col lg={{ offset: 0, span: 3 }}md={{span:12}} sm={12}>
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

              <div className="d-lg-flex mt-2">
                <Col  lg={4}  md={12} xs={12}>
                  <Graph />
                </Col>
                <Col lg={4} md={12} xs={12}><Transfer /></Col>
                <Col  lg={4}  md={12} xs={12}><Graph /></Col>
                
              </div>
            </Col>


          </Col>
  </Row>
   </div>
  
   </>
  )
}

export default Dashboard