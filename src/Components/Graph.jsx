import React from 'react'
import "./Graph.css"
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
const data = [
    {
        data: 4500
    },
    {
        data: 5000
    },
    {
        data: 4700
    },
    {
        data: 4400
    },
    {
        data: 4800
    },
    {
        data: 5300
    },
    {
        data: 5509
    },
    {
        data: 6455
    },
    {
        data: 7700
    },
    {
        data: 5509
    },
    {
        data: 6455
    },
    {
        data: 7700
    }, {
        data: 5509
    },
    {
        data: 6455
    },
    {
        data: 7700
    },
    {
        data: 4400
    },
    {
        data: 4800
    },

    {
        data: 4900
    },

    {
        data: 5000
    }


]
function Graph() {
    return (
        <>
            <div className="Gcard">
                <span style={{ color: "white", fontWeight: "550" }}>This month earnings</span>
                <span className='ratio' style={{ color: "white", fontWeight: "bold ", fontSize: "larger" }} >$682.7</span>
                <span className='btn'>+2.45%</span>
                <div className="chart">
                    my chart
                    <ResponsiveContainer height="100%" width="100%">
                        <AreaChart height={400} width={500} data={data}>
                            <Tooltip cursor={false} />
                            <Area
                                animationBegin={0}
                                animationDuration={2000}
                                type="monotone"
                                dataKey="data"
                                stroke="#ffc107"
                                fill="#8068233e"
                                strokeWidth={4}
                            >
                            </Area>
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    )
}

export default Graph