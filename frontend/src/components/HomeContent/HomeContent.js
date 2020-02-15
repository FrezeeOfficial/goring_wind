import React, { Component } from 'react';
import './HomeContent.css'
import WindCard from './WindCard';

class HomeContent extends Component {
    constructor(props){
        super(props);

    }

    componentDidMount() {
        const wind = [];

        const xhr = new XMLHttpRequest();

        xhr.onload = () => {
            if (xhr.status == 200) {
                var data = JSON.parse(xhr.response);

                for (var i = 0; i < data.data.length; i++) {
                    wind.push({
                        name: data.data[i].name,
                        location:  data.data[i].location,
                        distance:  data.data[i].distance,
                        speed:  data.data[i].speed,
                        direction:  data.data[i].direction
                    });
                }

            } else {
                // failed
            }
        };

        xhr.open('POST', 'http://192.168.0.100:5000/weather/getCurrent?type=wind');

        xhr.send();

        this.state = { wind };
      }

    render(){
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
                                        {this.state.wind.map((host, index) => (
                                             <WindCard StationName={host.name} StationLocation={host.location} StationDistance={host.distance} CurrentSpeed={host.speed} Direction={host.direction}/>
                                        ))}
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
    }
}

export default HomeContent;