import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './app/components/container/AppContainer';

let el = document.getElementById('app');

if (el) {
    ReactDOM.render(
        <AppContainer />,
        el
    );
}