import React from 'react';

const Summary = props => {
    return (
        <section className="summary">
            <h2 className="text-uppercase">
                <i className="fa fa-lg fa-user"></i>
                Summary</h2>
            <div>{props.summaryData}</div>
        </section>
    );
};

export default Summary;
