import React from 'react';

import styles from './App.module.css';

import AppContainer from './components/AppContainer/AppContainer';
import ContentInfo from './components/content-info/ContentInfo';
import Card from './components/card-component/Card';
import Accordion from './components/accordion/Accordion';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <AppContainer>
      <div className={styles.blockElem}>
        <div className={styles.blockElemElem}>
          <h1>Paketshop Manager</h1>
          <div className="input-group mt-3 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name ..."
              aria-label="Example text with button addon"
              aria-describedby="button-addon1">
            </input>
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="E-Mail ..."
              aria-label="Example text with button addon"
              aria-describedby="button-addon1">
            </input>
          </div>
          <div className="input-group mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder='Was möchten Sie uns mitteilen?'>
            </textarea>
          </div>
          <button type="button" className="btn btn-success">Nachricht senden</button>
        </div>
        <img
          src={process.env.PUBLIC_URL + '/images/psm_dashboard_overlay.png'}
          alt='dashboard-overlay-img'
          className={styles.blockElemElem}
          height='50%'
          width='50%' />
      </div>
      <ContentInfo />
      <Card />
      <Card />
      <Accordion />
      <Footer />
    </AppContainer>
  )
}