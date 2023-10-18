import React,{Component} from "react";

class DataInput extends Component{
    constructor(props){
        super();
        this.state ={
            valSelectionne : ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
            let name = event.target.name;
            let value = event.target.value;

            this.setState(()=>({
                [name] : value
            }),
                this.props.setParentValFunc(value)
            );
    }

    render(){
        return(
            <>
                <input onChange={this.handleChange} value={this.state.valSelectionne} name="valSelectionne" type="text" ></input>
            </>
        );
    }
}

export default DataInput;