    // src/components/contacts.js

    import React from 'react';
    import Populations from './populations';

    const States = ({ states }) => {
      return (
        <div>
          <center><h1>Latest State Covid Figures</h1></center>
          {states.map((state,i) => (
            <div className="card" key={i}>
              <div className="card-body">
                <h5 className="card-title">{state.state}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Total Tests: {state.totalTestResults}</h6>
                <p className="card-text">Positive: {state.positive}</p>
                <p className="card-text">Negative: {state.negative}</p>
                <p className="card-text">State Population: {Populations[state.state]}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default States