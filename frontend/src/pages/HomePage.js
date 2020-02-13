import React, { Component } from 'react';

import Header from '../components/Header/Header';
import HomeContent from '../components/HomeContent/HomeContent';

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <HomeContent />
            </React.Fragment>
        )
    }
}

export default HomePage