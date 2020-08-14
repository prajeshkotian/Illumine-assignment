// JavaScript source code
import React from 'react';
import './Finished.css';

function Finished(props) {
    return (
        <div className="Finished">
            <h3>Hey You have reached the end of this Questionnare!!!!</h3>
            <h5>Press Finish Button to view Summary</h5>
            
            <button id='submit' onClick={props.finalclicked }>Finish</button>
        </div>
        );
}

export default Finished;