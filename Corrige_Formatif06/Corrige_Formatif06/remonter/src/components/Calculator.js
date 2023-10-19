import React, { useState } from 'react';
import TemperatureInput from './TempInput';
import { tryConvert, toCelsius, toFahrenheit, BoilingVerdict } from '../util/Util';


function Calculator() {

  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature)
    setScale('c')
  }

  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature)
    setScale('f')
  }

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange} />
      <BoilingVerdict
        celsius={parseFloat(celsius)} />
    </div>
  );
}

export default Calculator;