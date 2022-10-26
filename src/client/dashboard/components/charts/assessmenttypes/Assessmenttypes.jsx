import React, { PureComponent } from 'react';import './assessmenttypes.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Week1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Week2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Week3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Week4',
    uv: 3000,
    pv: 9900,
    amt: 3490,
  },
  
];

export default class Assessmenttypes extends PureComponent {

  render(){
  return (
    <div className="at_container">
      <div className="top">
      
        <div className="info">
        <h4>Breakdown of assessment types this month</h4>
        <h1>450 total tests</h1>
          <div className="percentage">
            <span>+6.5%</span> 
          </div>
        </div>
      
      </div>
      <div className="chart">
        <ResponsiveContainer height="100%" width="100%">
          <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{top: 0,right: 0,left: 0,bottom: 0,
          }}
          > 

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />



          </AreaChart>

        </ResponsiveContainer>
      
      </div>
      
    
    </div>
  )
}
}

