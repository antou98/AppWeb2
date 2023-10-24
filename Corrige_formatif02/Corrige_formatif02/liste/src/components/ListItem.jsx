import React from 'react';

function ListItem(props) {
    // Correct ! Pas la peine de spécifier la clé ici :  
    return <li>{props.value}</li>;
}

export default ListItem;