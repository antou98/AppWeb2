import React from 'react';

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    console.log(e.target.value)
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const scaleNames = {
      c: 'Celsius',
      f: 'Fahrenheit'
    };
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Saisissez la température en {scaleNames[scale]} :</legend>
        <input value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;