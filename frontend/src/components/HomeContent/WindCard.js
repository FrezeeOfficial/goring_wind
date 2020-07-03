import React, { Component } from 'react';


class WindCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colour_flag: undefined
        }
    }

    componentDidMount() {
        if (this.props.Status == "down") {
            this.setState({colour_flag: "card_override_red"});
        }
    }

    rotate = () => {
        var val = (-45 + parseInt(this.props.Bearing, 10));
        return(`rotate(${val})`)
    }

    render() {
        // FIXME: no safari or mozilla support for the moving arrows. (webkit and moz required)
        if (this.props.Status == "down") {
            return (
            <div className={"colour-card blue wind-card " + this.state.colour_flag}>
                <div className="form-card-body ">
                    <div className="form-card-body-left">
                        <div>
                        <h3>{this.props.StationName}</h3>
                        <span>{this.props.StationLocation}, {this.props.StationDistance} KM</span>
                        </div>
                    </div>
                    <div className="form-card-body-right">
                        <div className="wind-arrow wind-question-mark">
                        <svg id="Component_1_1" data-name="Component 1 – 1" xmlns="http://www.w3.org/2000/svg" width="35.248" height="34.335" viewBox="0 0 35.248 34.335">
                            <path id="navigation" d="M35.056.813a.692.692,0,0,0-.775-.143L.4,15.914a.667.667,0,0,0-.392.7.674.674,0,0,0,.564.571l15.2,2.5L17.5,33.757a.686.686,0,0,0,.678.589.683.683,0,0,0,.612-.372l16.383-32.4A.659.659,0,0,0,35.056.813Z" transform="translate(0 -0.011)" fill="#fff"/>
                            <text id="_" data-name="?" transform="translate(15 27)" fill="rgba(231, 76, 60, 1)" font-size="25" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">?</tspan></text>
                        </svg>

                        </div>
                        <div>
                            <div><span id="wind-speed">? </span> <span id="wind-direction">???</span></div>
                            <span id="speed-unit">KNOTS</span>
                        </div>
                    </div>
                </div>
            </div>
            );
        } else {
        return (
            <div className={"colour-card blue wind-card " + this.state.colour_flag}>
                <div className="form-card-body ">
                    <div className="form-card-body-left">
                        <div>
                        <h3>{this.props.StationName}</h3>
                        <span>{this.props.StationLocation}, {this.props.StationDistance} KM</span>
                        </div>
                    </div>
                    <div className="form-card-body-right">
                        <div className="wind-arrow">
                            <svg width="35.248"  transform={this.rotate()} height="34.415" viewBox="0 0 35.248 34.415"><path className="wind-arrow-svg" d="M35.056.817a.682.682,0,0,0-.775-.145L.4,16.222A.683.683,0,0,0,.57,17.516l15.2,2.547L17.5,34.424a.684.684,0,0,0,.562.59.665.665,0,0,0,.115.01.682.682,0,0,0,.612-.38L35.178,1.6A.682.682,0,0,0,35.056.817Z" transform="translate(0 -0.61)" fill="#ffffff"/></svg>
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
}

export default WindCard