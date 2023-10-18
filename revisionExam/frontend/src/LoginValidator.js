import React,{Component} from "react";
import { withRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

class LoginValidator extends Component{

    constructor(props){
        super();
        this.state = {
            username : "",
            password : "",
            errormsg : ""
        }

        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.removeAutomaticPlaceHolder = this.removeAutomaticPlaceHolder.bind(this);
        this.preValidateLogin = this.preValidateLogin.bind(this);
        this.connectionEvent = this.connectionEvent.bind(this);
    }

    //ajoute les place holders au lancement
    componentDidMount(){
        this.setState(()=>({
            username : this.props.placeHolderUserName,
            password : this.props.placeHolderPassWord
        }));
    }

    inputChangeHandler(event){
        let name = event.target.name;
        let value = event.target.value;

        this.setState(()=>({
            [name] : value
        }));
    }

    //enleve les place holders lors de click 
    removeAutomaticPlaceHolder(event){
        let value = event.target.value;
        let name = event.target.name;
        if(value==="username here"||value==="password here"){
            this.setState(()=>({
                [name] : ""
            }));
        }
    }


    preValidateLogin(){
        let msgError = "";
        if(this.state.username ==="username here" || this.state.password==="password here"){
            msgError += "remove place holders   ";
        }

        if(this.state.username.length<=0){
            msgError += "username empty   ";
        }

        if(this.state.password.length<=0){
            msgError += "password empty   ";
        }

        return msgError;
    }

    connectionEvent(){
        if(this.preValidateLogin().length<=0){
            this.setState(()=>({
                errormsg : ""
            }));
            
            this.props.funcLogin(this.state.username,this.state.password)
        }
        else{
            this.setState(()=>({
                errormsg : this.preValidateLogin()
            }));
        }
    }

    render(){

        return(
            <>
                <div id="connection">
                <h1>Connection</h1>
                <label fo>Username</label>
                <input onChange={this.inputChangeHandler} value={this.state.username} onClick={this.removeAutomaticPlaceHolder} name="username" type="text" ></input>
                <br></br>
                <label>Password</label>
                <input onChange={this.inputChangeHandler} value={this.state.password}  onClick={this.removeAutomaticPlaceHolder} name="password" type="text" ></input>
                <br></br>
                <button onClick={this.connectionEvent}>Enter</button>
                <p>{this.state.errormsg}</p>
                </div>
            </>
        );
    }
}

export default LoginValidator;