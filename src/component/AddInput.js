import React, { Component } from 'react';
import '../App.css'
import { Icon, Button} from 'antd'

export default class AddInput extends Component {
    constructor(props){
        super(props);
        this.addInput = React.createRef();
    }

    addItem = ()=>{
        const input = this.addInput.current.value;
        if(input !== ""){
            this.props.onAddInput(input);
        }
        this.addInput.current.value = ""
    }
    render() {
        return (
            <div>
            <input
            style={{width:'75%'}}
            //className="input-text"
            type="text"
            name="ListItem"
            ref={this.addInput}/>
            <Button type="primary" onClick={this.addItem}>
            <Icon type="plus-circle-o" />
            Add
            </Button>
        </div>
        );
    }
}