import React, { Component } from 'react';
import './HomeContent.css'


import InteractiveWeather from './InteractiveWeather';
import WindCard from './WindCard';
import TideCard from './TideCard';
import Failure from '../Failure';
// not used yet
// import GenericDialog from '../../modals/genericDialog';

class HomeContent extends Component {

constructor(props){
    super(props);

    this.state = {
        wind: null,
        isLoaded: null,
        tide: null,
        failure: { 
            display: "false",
            message: "",
            code: ""
        }
        }
    }

    displayError(code, message, time) {
        this.setState({failure: {display: "true", code: code, message: message}})
        setTimeout(() => { this.setState({failure: {display: "false"}}) }, time);
    }

    componentDidMount() {  
        this.displayError("0x00", "This is alpha so it will be buggy!", 3000);
        this.getTideData();     
        this.getWindData();

        // auto refress wind data
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
            this.displayError("0x01", "failed to retrieve wind data", 5000);
        }
    };

    xhr.open('POST', 'http://192.168.1.3:5000/weather/getCurrent?type=wind');

    xhr.send();
    }

    getTideData() {
        const t_tide = [];
        const xhr = new XMLHttpRequest();
    
        xhr.onload = () => {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.response);
                data = data.res;
    
                console.log("tide");
                console.log(data);
                this.setState({
                    tide: data
                })
    
            } else {
                // failed
                this.displayError("0x01", "failed to retrieve tide data", 5000);
                console.log("tide failed");
            }
        };
    
        xhr.open('POST', 'http://192.168.1.3:5000/weather/getCurrent?type=tide');
    
        xhr.send();
    }

    render(){
        if (this.state.isLoaded) {    
            var { wind ,tide} = this.state

            var Cards = (                                    
                wind.map((row) => {
                    return (<WindCard StationName={row.name} StationLocation={row.location} StationDistance={row.distance} CurrentSpeed={row.speed} Direction={row.direction} key={row.key}/>)
                })
            )


        return (
                    <main id="layout-container">
                        <Failure display={this.state.failure.display} code={this.state.failure.code} message={this.state.failure.message}/>
                        <div id="content">
                            <div className="grid-container content-container">
                                <div className="grid-card">
                                    <div className="full-size">
                                        <span className="card-title">INTERACTIVE WEATHER</span>
                                        <div className="colour-card blue pale-blue-shadow full-size">
                                            <InteractiveWeather wind={this.state.wind} />
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
                                            { <TideCard tide={this.state.tide} /> }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
        )
        } else {
            return(
              <div className="error-modal">
                  <div className="error-modal-inner">
                      <span className="oops-error">Oops,</span>
                      <span>Something went wrong. Try again?</span>
                      <button>TRY AGAIN</button>
                  </div>
              </div>
            )
        }
    }
}

export default HomeContent;