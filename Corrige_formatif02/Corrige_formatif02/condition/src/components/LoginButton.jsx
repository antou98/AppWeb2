import React  from 'react';

function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Connexion
      </button>
    );
  }

export default LoginButton;