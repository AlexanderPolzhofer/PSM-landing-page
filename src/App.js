import React from 'react';

import AppContainer from './components/AppContainer/AppContainer';

export default function App() {
  return (
    <AppContainer>
      <div>
        <h1>Paketshop Manager</h1>
      </div>
      <div>
        <div className="input-group mb-5">
          <button className="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
          <input
            type="text"
            className="form-control"
            placeholder="Name ..."
            aria-label="Example text with button addon"
            aria-describedby="button-addon1">
          </input>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
            <input
              type="text"
              className="form-control"
              placeholder="E-Mail ..."
              aria-label="Example text with button addon"
              aria-describedby="button-addon1">
            </input>
          </div>
        </div>
      </div>
    </AppContainer>
  )
}