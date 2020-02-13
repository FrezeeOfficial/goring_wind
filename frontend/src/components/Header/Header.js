import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (            
            <header>
                <div class="f-navbar-top">
                    <div class="container">
                        <div class="f-navbar-floatright f-navbar-top-ul">
                            <ul>
                                <li><a class="white" href="https://jswheeler.uk" >MY WORK</a></li>
                                <li><a class="white" href="/login">LOGIN</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="f-navbar-bottom">
                <div class="container">
                        <div class="f-navbar-floatleft">
                            <a href="/" class="logo">GORING WIND </a>
                        </div>
                        <div class="f-navbar-floatright f-navbar-bottom-ul">
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