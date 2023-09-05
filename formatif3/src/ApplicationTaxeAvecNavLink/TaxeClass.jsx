import React,{Component} from "react";
import Calculatrice from "./Calculatrice";
import AvionImage from "./avion.png"
import "./Style.css";

class TaxeClass extends Component{

    constructor(){
        super();
        this.state = {
            annee: 1992,
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

    setYear(value){
        this.setState(()=>({
            annee  : parseInt(value), 
        }),()=>{
            //ajuste tps tvq montant après changement d'année
            this.setTpsetTVQ(value);
        });
    }

    setTpsetTVQ(value){
        //TPS
        if(parseInt(value)<=2006){
            this.setState(()=>({
                TPS  : 7.0, 
            }),()=>{
                //pour ajuster les taxe et montant total
                this.calculeTaxe();
            });
        }else if(parseInt(value)==2007){
            this.setState(()=>({
                TPS : 6.0, 
            }),()=>{
                //pour ajuster les taxe et montant total
                this.calculeTaxe();
            });
        }
        else{
            this.setState(()=>({
                TPS : 5.0, 
            }),()=>{
                //pour ajuster les taxe et montant total
                this.calculeTaxe();
            });
        }

        //TVQ
        if(parseInt(value)>=2013){
            this.setState(()=>({
                TVQ : 9.975, 
            }),()=>{
                //pour ajuster les taxe et montant total
                this.calculeTaxe();
            });

        }else if(parseInt(value)==2012){
            this.setState(()=>({
                TVQ : 9.5, 
            }),()=>{
                //pour ajuster les taxe et montant total
                this.calculeTaxe();
            });

        }else if(parseInt(value)==2011){
            this.setState(()=>({
                TVQ : 8.5, 
            }),()=>{
                //pour ajuster les taxe et montant total
                this.calculeTaxe();
            });

        }else if(parseInt(value)<=2010 && parseInt(value)>=1998){
            this.setState(()=>({
                TVQ : 7.5, 
            }),()=>{
                //pour ajuster les taxe et montant total
                this.calculeTaxe();
            });

        }else if(parseInt(value)<=1997 && parseInt(value)>=1994){
            this.setState(()=>({
                TVQ : 6.5, 
            }),()=>{
                //pour ajuster les taxe et montant total
                this.calculeTaxe();
            });

        }else{
            this.setState(()=>({
                TVQ : 6.0, 
            }),()=>{
                //pour ajuster les taxe et montant total
                this.calculeTaxe();
            });
        }
    }

    handleYearChange(event){
        const value = event.target.value; 
        //setyear => setTpsetTvq => calculeTaxe
        //setyear() appel setpsettvq() après avoir mis le state de year a la value passer en paramètre => settpsetvq() appel calculeTaxe() après avoir mis la valeur des états tps et tvq à jour => ensuite calculeTaxe met à jour l'état des taxes
        this.setYear(value)

        //ajuste les montants de taxe associés au montant
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
        //alert(event.target.value)
        const name = event.target.name;
        const value = event.target.value;
        this.setState(()=>({
            [name] : parseInt(value), 
        }), () => {
            // After the state is updated, call calculeTaxe
            this.calculeTaxe();
          });          
    }

    componentDidMount() {
        // Call your init function after the component is mounted

        console.log("init");
        this.setTpsetTVQ(1992);
      }

    render(){
        const startYear = 1992;
        const endYear = 2023;
        const years = [];
        for(let year = startYear; year <= endYear;year++){
            years.push(year)
        }
        
        return (
            <div id="styleDiv">
                <h1 style={{color:"white",margin:"0px",textAlign:"center"}}>Calcul des taxes</h1>
                <img src={AvionImage} alt="image" style={{position:"absolute",top:"80px",left:"20px"}}/>
            <div id="enfantCal">
                <h2>Choisissez l'année du calcul : </h2>
                <select value={this.state.annee} onChange={this.handleYearChange}>
                {years.map((date, index) => (
                    <option key={index} value={date} name="annee" >{date}</option>
                ))}
                </select>
                <br></br>
                <h2 style={{margin:"0px"}}>Montant : </h2>
                <input type="number" name="montant" value={this.state.montant} onChange={this.handleMontantChange} ></input>
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
                    <p style={{color:"white",textAlign:"center"}}>@ Cégep Limoilou - 2023</p>
                    <p style={{height:"20px"}}></p>
            </div>
        );
    }

}

export default TaxeClass;