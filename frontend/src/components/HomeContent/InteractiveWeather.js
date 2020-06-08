import React, { Component } from 'react';
import './InteractiveWeather.css';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Control from 'react-leaflet-control';
const L = require('leaflet');

class InteractiveWeather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mapCenter: [50.802897, -0.440456],
            zoomLevel: 12,
            wind: props.wind,
            markers: [],
            currentMarker: null
        }
    }
    
    componentDidMount() {
        this.updateMarkers();
    }
  
    updateMarkers() {
        for (var i = 0; i < this.state.wind.length; i++) {
            this.state.markers.push( { 
                position: [
                this.state.wind[i].position[0],
                this.state.wind[i].position[1]
                ],
                all: this.state.wind[i]
            });
        }        
    }

    handleMarkerClick(e) {
        this.setState({
            currentMarker: e.target.options.data
        })
    }

    render() {
        const stamenTonerTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        const stamenTonerAttr = '&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> & <a href=&quot;http://C6100M1.FRZE.NET/;>C6100M1.FRZE.NET</a> contributors';

        /* 
            C6100 Api will work by getting wind forecast data and converting it into tiles with a colour gradient and add as an overlay on top of openstreetmap
        */

        return (
                <Map
                center={this.state.mapCenter}
                zoom={this.state.zoomLevel}
            >
                <TileLayer
                    attribution={stamenTonerAttr}
                    url={stamenTonerTiles}
                />
                
                <Control>
                    <div className="control-bar">
                        Alpha Feature
                    </div>
                </Control>
                
                {this.state.markers.map((data, idx) => 
                    <Marker 
                        icon={new L.Icon({
                            iconUrl: require('./navigation.svg'),
                            iconSize: new L.Point(60, 75),
                            className: 'leaflet-div-icon'
                        })}
                        key={`marker-${idx}`} 
                        position={data.position} 
                        data={data.all}
                        onClick={this.handleMarkerClick.bind(this)}
                    > 
                    
                    <Popup>
                        <div className="wind-popup">
                            <div class="wind-popup-header">
                                <h1>GORING STATION</h1>
                                <h2>OWNED BY GW</h2>
                            </div>
                            <div class="wind-popup-body">
                                <ul>
                                    <li>WIND SPEED: 30MPH</li>
                                    <li>WIND DIRECTION: WSW</li>
                                    <li>WIND GUST: 40MPH</li>
                                    <br></br>
                                    <li>TIDE: 1.74M</li>
                                    <li>SWELL: 1.78M</li>
                                </ul>
                                <div className="wind-popup-body-overall">
                                    <a>OK</a>
                                    <span>Recommended: Advanced+</span>
                                </div>
                            </div>
                        </div>
                    </Popup>
                    </Marker>
                )}
            </Map>
        )
    }   
}

export default InteractiveWeather;