/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CoolComponentProps from "../coolComponent/models/coolComponentProps";
import CoolComponent from "../coolComponent/components/coolComponent";

(function () {
    const coolComponentProps = new CoolComponentProps("Some property value");
    const renderApp = () => {
        ReactDOM.render(React.createElement(CoolComponent, coolComponentProps), document.getElementById('content'));
    };
    renderApp();
})();