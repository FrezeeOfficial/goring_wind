import React, { Component } from 'react';
import "./failure.css";

class Failure extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        if (this.props.display == "true") {
            return(
                <div className="failure-container fadein">
                        <div className="container align-middle">
                        <span className="float-left">{this.props.code}:</span>
                        <span className="float-right">{this.props.message}</span>
                    </div>
                </div>
            )
        } else if (this.props.display == "false") {
            return(
                <div className="failure-container fadeout ">
                <div className="container align-middle">
                <span className="float-left">{this.props.code}:</span>
                <span className="float-right">{this.props.message}</span>
            </div>
        </div>
            )
        }
    }
}

export default Failure;