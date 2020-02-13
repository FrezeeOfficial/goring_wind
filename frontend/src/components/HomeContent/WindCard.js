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
                        <h3>{this.props.StationName}</h3>
                        <span>{this.props.StationLocation}, {this.props.StationDistance} KM</span>
                    </div>
                    <div className="form-card-body-right">
                    <span>{this.props.CurrentSpeed} <span>{this.props.Direction}</span></span>
                        <span>KNOTS</span>
                    </div>
                </div>
            </div>
        )
    }   
}

export default WindCard