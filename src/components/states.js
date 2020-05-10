    // src/components/contacts.js

    import React from 'react';
    import Populations from './populations';

    const States = ({ states }) => {
      return (
        <div>
          <center><h1>Latest State Covid Figures</h1></center>
          {states.map((state) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{state.state}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Total Tests: {state.totalTestResults}</h6>
                <p class="card-text">Positive: {state.positive}</p>
                <p class="card-text">Negative: {state.negative}</p>
                <p class="card-text">State Population: {Populations[state.state]}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default States