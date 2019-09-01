import React from 'react';

const Quote = ({result}) => {

    if(Object.keys(result).length === 0) return null;

    return ( 
        <div className = "resultado">
            <h2>Result</h2>
            <p className = "precio">Price is <span>{result.PRICE}</span></p>
            <p>Highest price of the day: <span>{result.HIGHDAY}</span> </p>
            <p>Lowest price of the day: <span>{result.LOWDAY}</span> </p>
            <p>Lowest price of the day: <span>{result.LOWDAY}</span> </p>
            <p>Lowest price of the day: <span>{result.LOWDAY}</span> </p>
        </div>
     );
}
 
export default Quote;