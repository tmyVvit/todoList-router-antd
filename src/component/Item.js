import React, { Component } from 'react';
import {List} from 'antd'

export default class Item extends Component {
    constructor(props){
        super(props);
        this.getModifyText = React.createRef();
    }

    modify = (e) =>{
        e.target.setAttribute("contentEditable", true);
        e.target.focus();
    }

    handleKeyPress = (e) => {
        let keycode = (e.keyCode? e.keyCode:e.which);
        if(keycode == '13'){
            // e.target.blur();
            e.target.setAttribute('contentEditable', false);
            this.props.onModify(e.target.id, e.target.innerText);
        }
    }

    handleOnBlur = (e) => {
        e.target.setAttribute('contentEditable', false);
        this.props.onModify(e.target.id, e.target.innerText);
    }
    render() {
        const {id, complete, text, onCheck} = this.props;
        return (
            <List.Item id={id}
                className={complete?"checked":""}
                ref={this.getModifyText}
                onDoubleClick={this.modify}
                onKeyPress={this.handleKeyPress}
                onBlur={this.handleOnBlur}
                >
                <input
                    type="checkbox"
                    checked={complete?"checked":""}
                    onChange={()=>onCheck(id, complete)}
                    />
                {text}
            </List.Item>
        );
    }
}