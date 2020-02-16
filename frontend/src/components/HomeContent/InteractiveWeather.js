import React, { Component } from 'react';
import './InteractiveWeather.css';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Control from 'react-leaflet-control';

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
        const stamenTonerAttr = '&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors';

        return (
                <Map
                center={this.state.mapCenter}
                zoom={this.state.zoomLevel}
            >
                <TileLayer
                    attribution={stamenTonerAttr}
                    url={stamenTonerTiles}
                />
                
                {this.state.markers.map((data, idx) => 
                    <Marker 
                        key={`marker-${idx}`} 
                        position={data.position} 
                        data={data.all}
                        onClick={this.handleMarkerClick.bind(this)}
                    />
                )}
            </Map>
        )
    }   
}

export default InteractiveWeather;