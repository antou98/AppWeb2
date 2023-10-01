import React, { Component,useEffect,useState } from 'react'
import PropTypes from 'prop-types';


//In React, the useEffect hook is designed to be used in functional components
function FetchApi1EtAffiche() {

  const [backEndData,setbackEndData] = useState({})  // useState({}) pour recevoir .json()

  useEffect(()=>{
    fetch("/api").then(response => response.json()).then(data =>{setbackEndData(data)})},[])//Empty dependency array means this effect runs once, similar to componentDidMount

  //ternaire
  //backEndData.users.map((user,index)=> (<p key={index}>{user}</p>   )) pas comme une fonction
  return (
    <>data : {( typeof backEndData.users === 'undefined') ? (<p>no data</p>):(backEndData.users.map((user,index)=> (<p key={index}>{user.name +'  '+ user.password}</p>   )))}</>
  
  )
}

function FetchApi1Data(nameUser,passWord){
  let userData = {"username": nameUser,"password": passWord}

  let estUnUser = false; 

  const responseData = fetch("/api",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    }).then(response =>{
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok.');
      }
    }).then(data=>{
      console.log(data.estUtilisateur)
      return data.estUtilisateur
    })
    .catch(error =>{
      console.log("error call api")
    })

    estUnUser = responseData
    return estUnUser;
}

function FetchApi2() {

  
  const [backEndData,setbackEndData] = useState('') // useState('') pour recevoir .text()

  useEffect(()=>{
    fetch("/api2").then(response => response.text()).then(data =>{setbackEndData(data)})},[])

  //ternaire

  return (
    <>data : {backEndData} </>  
  )
}


export class App extends Component {

  constructor(props) {
    super();
    this.state = {
        userName : '',
        passWord : '',
        connect : ''

    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.tryConnect = this.tryConnect.bind(this)
  }

  handleInputChange(event){

      const targetName = event.target.name;
      const targetValue = event.target.value;

      console.log(targetName)
      console.log(targetValue)

    this.setState({
      [targetName]: targetValue,
    });
  }

  async tryConnect() {
    const result = await FetchApi1Data(this.state.userName, this.state.passWord);
    if(result){
      this.setState({ connect: "connection" });
    }
    else{
      this.setState({connect: "pas connecté"})
    }
  }

  

  render() {
    //<FetchApi1EtAffiche />
    //<FetchApi2/>
    return (
      <div style={{position:"absolute",top:"10px",left:"10px",border:"1px solid black"}}>
        <input type='text' name='userName' onChange={this.handleInputChange} value={this.state.userName}></input>
        <input type='text' name='passWord' onChange={this.handleInputChange} value={this.state.passWord}></input>
        <button onClick={this.tryConnect}>Click</button>
        <p>status : {this.state.connect}</p>
      </div>
    
    )
  }
}

/*App.PropTypes={
  exampleString: PropTypes.string,
  onChangeFunc : PropTypes.func
}*/


export default App
