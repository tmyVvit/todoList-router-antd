import * as aType from '../constant/actionType'
import * as fType from '../constant/filterType'

export default (state={filter: fType.ALL, todoList:[]}, action)=>{
    switch(action.type) {

        case aType.ACTION_MODIFY:
        case aType.ACTION_CHECK:
        case aType.ACTION_ADD:{
            return {
                filter: state.filter,
                todoList: [...action.list]
            }
        }

        case aType.ACTION_INIT:
        case aType.ACTION_FILTER:
            return {
                filter: action.filter,
                todoList: [...action.list]
            }


        default: return state;
    }
}