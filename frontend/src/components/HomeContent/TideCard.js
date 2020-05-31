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
        //     <ResponsiveContainer >
        //         <AreaChart
        //         data={this.props.tide}
        //         >
        //         <CartesianGrid strokeDasharray="3 3" style={{ textAnchor: 'middle' , fill: 'rgba(255, 255, 255, 1)' }} />
        //         <XAxis dataKey="name" style={{ textAnchor: 'middle' , fill: 'rgba(255, 255, 255, 1)' }} />
        //         <YAxis style={{ textAnchor: 'middle' , fill: 'rgba(255, 255, 255, 1)' }}/>
        //         <Tooltip />
        //         <Area type="monotone" dataKey="uv" stroke="#E1B12C" fill="#FCD362" />
        //         </AreaChart>
        //   </ResponsiveContainer>
            
        <div className="error-center">
            <a>Sorry this hasn't been implemented yet.</a>
        </div>
        )
    }
}
  

export default Tidecard