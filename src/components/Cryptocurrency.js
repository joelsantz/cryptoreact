import React from 'react';

const Cryptocurrency = ({cryptocurrency}) => {
    const { FullName, Name } = cryptocurrency.CoinInfo;
    return ( 
        <option value = {Name}>
            {FullName}
        </option>
     );
}
 
export default Cryptocurrency;