import React from 'react';

function Resultat(props) {
    return (
        <div>
            <label>
                Résultat :
            </label>
            <label>
                {props.resultat}
            </label>
        </div>

    )
}

export default Resultat;