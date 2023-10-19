import React, { useState } from 'react';

function Calcul() {

    const [resultat, setResultat] = useState(0);

    return (
        <div>
            <button onClick={() => setResultat(resultat + 10)}>Additionner 10</button>
            <button onClick={() => setResultat(resultat + 20)}>Additionner 20</button>
            <label>Résultat :  {resultat}</label>
        </div>
    );
}

export default Calcul;