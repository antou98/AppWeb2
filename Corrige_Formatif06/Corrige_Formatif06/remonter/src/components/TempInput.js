import React from 'react';

function TemperatureInput(props) {

  const handleChange = (e) => {
    console.log(e.target.value)
    props.onTemperatureChange(e.target.value);
  }

  const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };
  const temperature = props.temperature;
  const scale = props.scale;
  return (
    <fieldset>
      <legend>Saisissez la température en {scaleNames[scale]} :</legend>
      <input value={temperature}
        onChange={handleChange} />
    </fieldset>
  );
}

export default TemperatureInput;