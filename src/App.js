import React, { useState, useEffect } from 'react';
import axios from 'axios';
import image from './cryptomonedas.png';
import Form from './components/Form';
import Spinner from './components/Spinner';
import { setTimeout } from 'timers';
import Quote from './components/Quote';


function App() {

  const [ currency, setCurrency ] = useState('');
  const [ cryptomoneda, setCryptomoneda ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ result, setResult ] = useEffect({});

  useEffect( () => {
      const quoteCryptocurrency = async () => {

        // si no hay moneda, no ejecutar
        if(currency === '') return;
      
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${currency}`;

        const result = await axios.get(url);

        
        //mostrar spinner
        setLoading(true);

        //ocultar spinner y agregar resultado
        setTimeout ( () => {
          setLoading(false);
          setResult(result.data.DISPLAY[cryptomoneda][currency]);
        }, 3000);
      }

      quoteCryptocurrency();

  }, [cryptomoneda, currency]);
 

  //mostrar spinner o resultado
  const component = (loading) ? <Spinner />: <Quote result = {result} />;

  return (
    <div className="container">
      <div className = "row">
        <div className = "one-half column">
          <img src = {image} alt = "crypto" className = "logotipo" />
        </div>
        <div className = "one-half column">
          <h1>Cryptocurrency right now!</h1>

          <Form
            setCurrency = { setCurrency }
            setCryptomoneda = { setCryptomoneda }
          />

          {component}
        </div>
      </div>
    </div>
  );
}

export default App;
