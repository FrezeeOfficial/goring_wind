import React, { Component } from 'react';
import './HomeContent.css'
import WindCard from './WindCard';

import apiContext from '../../context/api-context';


class HomeContent extends Component {
    static contextType = apiContext;

    constructor(props){
        super(props);

        this.state = {
            wind: null,
            isLoaded: null,
            api: null
        }
    }

    componentDidMount() {
        this.state.api = this.context;
        const api = this.state.api;

        const t_wind = [];
        const xhr = new XMLHttpRequest();

        var params = {
            token: api.token
        } 

        xhr.onload = () => {
            if (xhr.status == 200) {
                var data = JSON.parse(xhr.response);
                var data = data.res;

                for (var i = 0; i < data.length; i++) {
                    t_wind.push(data[i]);
                }

            } else {
                // failed
            }
        };

        xhr.open('POST', 'http://192.168.0.100:5000/weather/getCurrent?type=wind');

        xhr.send(JSON.stringify(params));

        this.setState({
            wind: t_wind,
            isLoaded: true
        });
    
      }

    render(){
        const { wind } = this.state
        console.log(wind)

        if (this.state.isLoaded) {    

            var Cards = (                                    
                this.state.wind.map((host, index) => (
                    <WindCard StationName={host[index].name} StationLocation={host.location} StationDistance={host.distance} CurrentSpeed={host.speed} Direction={host.direction}/>
                ))
            )

        return (
                <main id="layout-container">
                    <div id="content">
                        <div className="grid-container content-container">
                            <div className="grid-card">
                                <div className="full-size">
                                    <span className="card-title">INTERACTIVE WEATHER</span>
                                    <div className="colour-card blue full-size">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="grid-card">
                                <div className="left-padding full-size">
                                    <span className="card-title">WIND</span>
                                    <div className="full-size">
                                        {Cards}
                                    </div>
                                </div>
                            </div>
                            <div className="grid-card">
                               <div className="left-padding full-size">
                                    <span className="card-title">TIDE</span>
                                    <div className="colour-card orange full-size">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
        )
        } else {
            return(<div>Loading...</div>)
        }
    }
}

export default HomeContent;