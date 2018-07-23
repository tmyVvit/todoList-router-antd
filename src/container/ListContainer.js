import {connect} from 'react-redux'
import dataAPI from '../api/dataAPI'
import List from '../component/List'
import {check, modify, init} from '../action'

const mapStateToProps = (state, props) => {
    return {
        list: state.todoList,
        filter: props.match.params.status,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    // const {match} = this.props;
    // const filter = match.params.status;
    return {
       onCheck: (id, complete)=>{
            dataAPI.checkItemRemote(id, complete, (list)=>dispatch(check(list)))
       },
       onModify:(id, content)=>{
            dataAPI.modifyRemote(id, content, (list)=>
                dispatch(modify(list)))
       },
       initList: (filter)=>{
           dataAPI.initTodos(filter, (list)=>dispatch(init(filter, list)))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)