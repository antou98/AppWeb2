import React,{Component} from "react";
import Calculatrice from "./Calculatrice";
import AvionImage from "../image/avion.png";
class TaxeClass extends React.Component{

    constructor(){
        super();
        this.state = {
            annee: 0,
            montant : 0.0,
            TPS : 0.0,
            TVQ : 0.0,
            montantTPS : 0.0,
            montantTVQ : 0.0,
            montantTotal : 0.0,
        }

        this.calcule = this.calcule.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleMontantChange = this.handleMontantChange.bind(this);

        //init calculatrice 
        this.calculatrice = new Calculatrice();
    }

    calcule(){
        const montantEntre = this.state.montant + (this.state.montantTPS) + (this.state.montantTVQ);

        this.setState(()=>({
            montantTotal : montantEntre, 
        }));
    }

    handleYearChange(event){
        const value = event.target.value;

        //set year 
        this.setState(()=>({
            annee  : parseInt(value), 
        }));

        //TPS
        if(parseInt(value)<=2006){
            this.setState(()=>({
                TPS  : 7.0, 
            }));
        }else if(parseInt(value)==2007){
            this.setState(()=>({
                TPS : 6.0, 
            }));
        }
        else{
            this.setState(()=>({
                TPS : 5.0, 
            }));
        }

        //TVQ
        if(parseInt(value)>=2013){
            this.setState(()=>({
                TVQ : 9.975, 
            }));

        }else if(parseInt(value)==2012){
            this.setState(()=>({
                TVQ : 9.5, 
            }));

        }else if(parseInt(value)==2011){
            this.setState(()=>({
                TVQ : 8.5, 
            }));

        }else if(parseInt(value)<=2010 && parseInt(value)>=1998){
            this.setState(()=>({
                TVQ : 7.5, 
            }));

        }else if(parseInt(value)<=1997 && parseInt(value)>=1994){
            this.setState(()=>({
                TVQ : 6.5, 
            }));

        }else{
            this.setState(()=>({
                TVQ : 6.0, 
            }));
        }

        //ajuste les montants de taxe associés au montant
        this.calculeTaxe();
        
        console.log(this.state.TPS + "   " + this.state.TVQ);
    }

    calculeTaxe = () =>{
        const taxetps = this.calculatrice.calculTPS(this.state.montant,this.state.TPS);
        const taxetvq = this.calculatrice.calculTVQ(this.state.montant,this.state.TVQ);
        
        this.setState(()=>({
            montantTPS : taxetps, 
            montantTVQ : taxetvq,
            montantTotal : taxetps+ taxetvq + parseFloat(this.state.montant),
        }));
    }

    handleMontantChange(event){
        this.calculeTaxe();
        alert(this.state.montant)
        const name = event.target.name;
        const value = event.target.value;
        this.setState(()=>({
            [name] : value, 
        }))    
    }

    render(){
        const startYear = 1992;
        const endYear = 2023;

        const years = [];
        for(let year = startYear; year <= endYear;year++){
            years.push(year)
        }
        //console.log(years);

        return (
            <div style={{backgroundColor:"#0F281F"}}>
                <img src={AvionImage} id="imageAvion"></img>
                <h1 style={{textAlign:"center",color:"white",marginTop:"0px"}}>Calcul des taxes</h1>
                <div id="formDiv">
                <h2>Choisissez l'année du calcul : </h2>
                <select value={this.state.annee} onChange={this.handleYearChange}>
                {years.map((date, index) => (
                    <option key={index} value={date} name="annee" onCl>{date}</option>
                ))}
                </select>
                <br></br>
                <h2 style={{margin:"0px"}}>Montant : </h2>
                <input type="number" name="montant" value={this.state.montant} onChange={this.handleMontantChange}></input>
                <br></br>
                <h2 style={{margin:"0px"}}>TPS : </h2>
                <input type="text" readOnly value={this.state.montantTPS}></input>
                <br></br>
                <h2 style={{margin:"0px"}}>TVQ : </h2>
                <input type="text" readOnly value={this.state.montantTVQ}></input>
                <br></br>
                <h2 style={{margin:"0px"}}>Montant Total : </h2>
                <input type="text" readOnly value={this.state.montantTotal}></input>
                <br></br>
                <br></br>
                </div>
                <p style={{color:"white",textAlign:"center"}}>cegep limoilou - 2023</p>
                <div style={{height:"20px"}}></div>
            </div>
        );
    }

}

export default TaxeClass;