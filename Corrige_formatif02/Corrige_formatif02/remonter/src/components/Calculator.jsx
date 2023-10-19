import React from 'react';
import TemperatureInput from './TempInput';
import {tryConvert, toCelsius, toFahrenheit, BoilingVerdict} from '../util/Util';


class Calculator extends React.Component {
    constructor(props) {
      super(props);

      // ici on doit lier le this à la fonction car sinon le this est undefined lors de 
      // l'appel au fonction. Nous n'avons pas ce probleme avec les fonctions flèchées
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      //this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.state = {
          temperature: '', 
          scale: 'c'};
    }
  
    
    handleCelsiusChange(temperature) {
      this.setState({scale: 'c', temperature});
    }
  
    handleFahrenheitChange = (temperature) => {
        this.setState({scale: 'f', temperature});
    }
  
  
    render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
      return (
        <div>
          <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange} />
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />
          <BoilingVerdict
            celsius={parseFloat(celsius)} />
        </div>
      );
    }
  }

  export default Calculator;