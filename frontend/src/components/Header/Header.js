import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (            
            <header>
                <div className="f-navbar-top">
                    <div className="container">
                        <div className="f-navbar-floatright f-navbar-top-ul">
                            <ul>
                                <li><a className="white" href="https://jswheeler.uk" >MY WORK</a></li>
                                <li><a className="white" href="/login">LOGIN</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="f-navbar-bottom">
                <div className="container">
                        <div className="f-navbar-floatleft">
                            <a href="/" className="logo">GORING WIND </a>
                        </div>
                        <div className="f-navbar-floatright f-navbar-bottom-ul">
                            <ul>
                                <li><a href="/interactive-weather">INTERACTIVE WEATHER</a></li>
                                <li><a href="/archive">ARCHIVE</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header