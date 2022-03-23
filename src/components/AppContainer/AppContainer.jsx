import React from 'react';

export default function AppContainer(props) {

    const { children } = props;
    return (<div className="container-fluid">
        {children}
    </div>)
}