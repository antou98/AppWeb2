import React, { useState } from 'react';
import TemperatureInput from './TempInput';
import { tryConvert, toCelsius, toFahrenheit, BoilingVerdict } from '../util/Util';


function Calculator() {

  const [tempAndScale, setTemperatureAndScale] = useState({
    temperature: 0,
    scale: 'c'
  });

  const celsius = tempAndScale.scale === 'f' ? tryConvert(tempAndScale.temperature, toCelsius) : tempAndScale.temperature;
  const fahrenheit = tempAndScale.scale === 'c' ? tryConvert(tempAndScale.temperature, toFahrenheit) : tempAndScale.temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        setTemperatureAndScale={setTemperatureAndScale} />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        setTemperatureAndScale={setTemperatureAndScale} />
      <BoilingVerdict
        celsius={parseFloat(celsius)} />
    </div>
  );
}

export default Calculator;