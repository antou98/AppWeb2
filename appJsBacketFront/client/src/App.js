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

function FetchApi1Data(props){
  const [backEndData,setbackEndData] = useState({});
  useEffect(()=>{fetch("/api").then(response => response.json()).then(data =>{setbackEndData(data.users)})},[])
  console.log(backEndData);
      
  let isUser = false
  let message ="not connected"
  console.log(backEndData.length)
  for(let i =0;i<backEndData.length;i++){
    if(backEndData[i].username===props.username && backEndData[i].password===props.password){
      isUser = true;
    }  
    console.log("vals   "+backEndData[i].username +"  "+backEndData[i].password)    
  }

  console.log("props : "+props.username + "  "+props.password)
  if(isUser){
    
      message= "is connected"
 
  }
  else{
  
    message= "not connected"

  }
  
    console.log(message)
    return <>{message}</>;
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
        connect : 'not connected'

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

  tryConnect(){
      
  }

  

  render() {
    //<FetchApi1EtAffiche />
    //<FetchApi2/>
    return (
      <div style={{position:"absolute",top:"10px",left:"10px",border:"1px solid black"}}>
        <input type='text' name='userName' onChange={this.handleInputChange} value={this.state.userName}></input>
        <input type='text' name='passWord' onChange={this.handleInputChange} value={this.state.passWord}></input>
        <button onClick={this.tryConnect}>Click</button>
        <FetchApi1Data username={this.state.userName} password={this.state.passWord}/>
      </div>
    
    )
  }
}

/*App.PropTypes={
  exampleString: PropTypes.string,
  onChangeFunc : PropTypes.func
}*/


export default App
