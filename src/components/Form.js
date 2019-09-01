import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cryptocurrency from './Cryptocurrency';
import Error from './Error';

function Form() {

    const [cryptocurrency, setCryptocurrency] = useState([]);
    const [currencyQuote, setCurrencyQuote] = useState('');
    const [cryptoQuote, setCryptoQuote] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {

        const consultAPI = async  () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const result = await axios.get(url);

            //colocar respuesta en el state
            setCryptocurrency(result.data.Data);
        }

        consultAPI();
    }, []);

    // validar que el usuario llene ambos campos
    const quoteCurrency = (e) => {
        e.preventDefault();

        //validar si ambos campos estan llenos
        if(currencyQuote === '' || cryptoQuote === '') {
            setError(true);
            return;
        }

        //pasar los datos al componente principal
        setError(false);
    }

    //mostrar el error en caso de que exista
    const component = (error) ? <Error message="Both fields are necessary"/> : null;

    return (
        <form
            onSubmit = {quoteCurrency}
        >
            {component}
            <div className = "row">
                <label>Choose your currency</label>
                <select 
                className= "u-full-width"
                onChange = { e => setCurrencyQuote(e.target.value) }
                
                >
                    <option value = "">- Choose your currency -</option>
                    <option value = "USD">American Dollar</option>
                    <option value = "EUR">Euro</option>
                    <option value = "GBP">Pounds</option>
                    <option value = "COP">Colombian Pesos</option>
                    <option value = "MXN">Mexican Pesos</option>
                    
                </select>
            </div>
            
            <div className = "row">
                <label>Choose your cryptocurrency</label>
                <select 
                className= "u-full-width"
                onChange = { e => setCryptoQuote(e.target.value) }
                >
                    <option value = "">- Choose your cryptocurrency -</option>

                    { cryptocurrency.map(cryptocurrency => (
                        <Cryptocurrency
                            key = {cryptocurrency.CoinInfo.Id} 
                            cryptocurrency = {cryptocurrency}
                        />
                    ))}

                </select>
            </div>

            <input type = "submit"  className = "button-primary u-full-width" value="Calculate"/>
        </form>

    )

}

export default Form;