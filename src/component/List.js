import React, { Component } from 'react';
import Item from './Item'
import * as fType from '../constant/filterType'
import {List as L} from 'antd'

export default class List extends Component {

    componentDidMount(){
        this.props.initList(this.props.filter);
    }
    render() {
        const {list, onCheck, onModify} = this.props;
        let listInfo = []
        list.map( item => {
            listInfo.push(
            <Item
                id={item.id}
                key={item.id}
                text={item.content}
                complete={item.status===fType.COMPLETE?true:false}
                onCheck={onCheck}
                onModify={onModify}
            />)
        })
        return (
            <L
            header={<div>To Do List</div>}
            bordered
            >
                {listInfo}
            </L>
        );
    }
}