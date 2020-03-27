import React from 'react';
import ReactDOM from 'react-dom';

// Uncomment to render test site
import { TestApp } from './test-app/TestApp';
const testapp_root = document.querySelector('#test-app');
if (testapp_root) {
    ReactDOM.render(<TestApp />, testapp_root);
}

// Widget for deployment
import { CoronaWidget } from './widget/CoronaWidget';
const widget_root = document.querySelector('#coronavirus-widget');
if (widget_root) {
    ReactDOM.render(
        <CoronaWidget
            position="bottom-right"
            infoURL="https://sacoronavirus.co.za"
        />,
        widget_root
    );
}
