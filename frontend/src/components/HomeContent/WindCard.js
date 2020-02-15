import React, { Component } from 'react';


class WindCard extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="colour-card blue wind-card">
                <div className="form-card-body">
                    <div className="form-card-body-left">
                        <div>
                        <h3>{this.props.StationName}</h3>
                        <span>{this.props.StationLocation}, {this.props.StationDistance} KM</span>
                        </div>
                    </div>
                    <div className="form-card-body-right">
                        <div className="wind-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35.248" height="34.415" viewBox="0 0 35.248 34.415"><path d="M35.056.817a.682.682,0,0,0-.775-.145L.4,16.222A.683.683,0,0,0,.57,17.516l15.2,2.547L17.5,34.424a.684.684,0,0,0,.562.59.665.665,0,0,0,.115.01.682.682,0,0,0,.612-.38L35.178,1.6A.682.682,0,0,0,35.056.817Z" transform="translate(0 -0.61)" fill="#fff"/></svg>
                        </div>
                        <div>
                            <div><span id="wind-speed">{this.props.CurrentSpeed } </span> <span id="wind-direction">{this.props.Direction}</span></div>
                            <span id="speed-unit">KNOTS</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }   
}

export default WindCard