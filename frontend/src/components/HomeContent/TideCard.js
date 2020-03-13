import React, { Component } from 'react';
import './InteractiveWeather.css';

import { ResponsiveContainer, Area, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart } from 'recharts';

class Tidecard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render(){
        return (
            <ResponsiveContainer>
                <AreaChart
                data={this.props.tide}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#E1B12C" fill="#FCD362" />
                </AreaChart>
          </ResponsiveContainer>
        )
    }
}
  

export default Tidecard