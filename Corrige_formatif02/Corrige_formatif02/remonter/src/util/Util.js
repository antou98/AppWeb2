import React from 'react';

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>L'eau bout.</p>;
    }
    return <p>L'eau ne bout pas.</p>; 
}

export  {tryConvert,
  toCelsius,
  toFahrenheit,
  BoilingVerdict
}
