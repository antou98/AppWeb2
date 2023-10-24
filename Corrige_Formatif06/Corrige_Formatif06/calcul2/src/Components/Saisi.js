import React, { useState } from 'react';
import Resultat from './Resultat';

function Saisi() {

    const [nombre1, setNombre1] = useState(0);
    const [nombre2, setNombre2] = useState(0);
    const [resultat, setResultat] = useState(0);

    return (
        <div>
            <form>
                <label>Nombre 1: </label>
                <input type="number" name="nombre1" onChange={e => setNombre1(Number(e.target.value))} />
                <label>Nombre 2:</label>
                <input type="number" name="nombre2" onChange={e => setNombre2(Number(e.target.value))} />
            </form>
            <button onClick={() => setResultat(nombre1 + nombre2)}>Additionner</button>
            <Resultat resultat={resultat} />
        </div>
    );
}

export default Saisi;