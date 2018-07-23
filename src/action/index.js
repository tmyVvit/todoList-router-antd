import * as aType from '../constant/actionType'

export const add = (list)=>{
    return {
        type: aType.ACTION_ADD,
        list,
    }
}

export const check = (list)=> {
    return {
        type: aType.ACTION_CHECK,
        list,
    }
}

export const modify = (list) => {
    return {
        type: aType.ACTION_MODIFY,
        list,
    }
}

export const filterChange = (filter,list) => {
    return {
        type: aType.ACTION_FILTER,
        filter,
        list,
    }
}

export const init = (filter, list)=>{
    return{
        type: aType.ACTION_INIT,
        list,
        filter,
    }
}