import React, { Component } from 'react';
import './HomeContent.css'

import InteractiveWeather from './InteractiveWeather';
import WindCard from './WindCard';

// not used yet
// import GenericDialog from '../../modals/genericDialog';

class HomeContent extends Component {

constructor(props){
    super(props);

    this.state = {
        wind: null,
        isLoaded: null,
        }
    }

    componentDidMount() {       
        this.getWindData();
        setInterval(this.getWindData.bind(this), 5000);
    }

    getWindData() {
    const t_wind = [];
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.response);
            data = data.res;

            for (var i = 0; i < data.length; i++) {
                t_wind.push({
                    name: data[i].name,
                    location: data[i].location,
                    distance: data[i].distance,
                    speed: data[i].speed,
                    direction: data[i].direction,
                    position: [
                        data[i].lat, data[i].long
                    ],
                    key: data[i].key
                });
            }

            this.setState({
                wind: t_wind,
                isLoaded: true
            });

        } else {
            // failed
        }
    };

    xhr.open('POST', 'http://192.168.0.100:5000/weather/getCurrent?type=wind');

    xhr.send();
    }

    render(){
        if (this.state.isLoaded) {    
            var { wind } = this.state

            var Cards = (                                    
                wind.map((row) => {
                    return (<WindCard StationName={row.name} StationLocation={row.location} StationDistance={row.distance} CurrentSpeed={row.speed} Direction={row.direction} key={row.key}/>)
                })
            )

        return (
                <main id="layout-container">
                    <div id="content">
                        <div className="grid-container content-container">
                            <div className="grid-card">
                                <div className="full-size">
                                    <span className="card-title">INTERACTIVE WEATHER</span>
                                    <div className="colour-card blue pale-blue-shadow full-size">
                                        <InteractiveWeather wind={wind} />
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