import React from 'react';

export default function Card() {
    return (
        <div className='card border-light mb-3' style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
            <div className="card-body">
                <h5 className="card-title">Light card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <img src={process.env.PUBLIC_URL + '/images/psm_dashboard.jpg'} alt='example-img' height='50%' width='50%' />
        </div>)
}