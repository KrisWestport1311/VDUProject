import React, { PureComponent } from 'react';
import './equipment.scss'
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';

const data = [
  { name: 'Chairs', value: 280 },
  { name: 'Screens', value: 310 },
  { name: 'Laptop', value: 390 },
  { name: 'Footrest', value: 200 },
];

export default class Equipment extends PureComponent {
  

  render() {
    return (
      <div className="at_container">
      <div className="top">
      
        <div className="info">
        <h4>Equipment purchases required types this month</h4>
        <h1>350 total items</h1>
          <div className="percentage">
            <span>+12.5%</span> 
          </div>
        </div>
      
      </div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="var(--secondary-dark)" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
      </div>
    );
  }
}
