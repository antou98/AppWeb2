import React,{Component} from "react";

class Calculatrice extends Component{

    constructor(){
        super();
        this.calculTPS = this.calculTPS.bind(this);
        this.calculTVQ = this.calculTVQ.bind(this);

    }

    calculTPS(montant,tps){
        const taxe = (tps * montant) /100;
        return taxe;
    }

    calculTVQ(montant,tvq){
        const taxe = (tvq * montant)/100;
        return taxe;
    }

}



export default Calculatrice;