import React from 'react';

const DateTime = ({ date }) => {
    return <div>{new Date(date).toLocaleString()}</div>;
};

export default DateTime;