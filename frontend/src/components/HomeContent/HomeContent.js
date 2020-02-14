import React, { Component } from 'react';
import './HomeContent.css'
import WindCard from './WindCard';

class HomeContent extends Component {
    constructor(props){
        super(props);

        const wind = [];

        wind.push({
            name: "LOCAL",
            location: "Goring",
            distance: "0",
            speed: "40",
            direction: "WSW"
        });   

        wind.push({
            name: "GORING",
            location: "Goring",
            distance: "0.8",
            speed: "40",
            direction: "WSW"
        });

        wind.push({
            name: "LANCING",
            location: "Lancing",
            distance: "6.6",
            speed: "39",
            direction: "WSW"
        });

    this.state = { wind };

    }

    componentDidMount() {
        // var data = [{name: "LOCAL", location: "Goring", distance: "0", speed: "40", direction: "WSW"},{name: "LOCAL", location: "Goring", distance: "0", speed: "40", direction: "WSW"}] ;
        // this.setState({wind: data});

        // fetch('http://jsonplaceholder.typicode.com/users')
        // .then(res => res.json())
        // .then((data) => {
        //   this.setState({ wind: data })
        // })
        // .catch(console.log)
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