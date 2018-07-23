import {connect} from 'react-redux'
import FilterGroup from '../component/FilterGroup'
import dataAPI from '../api/dataAPI';
import {filterChange} from '../action'

const mapStatusToProps = (state, props)=>{
    return {
        filter: state.filter,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSetFilterOld: (filter) => {
            dispatch(filterChange(filter, dataAPI.setFilter(filter)));
        },
        onSetFilter: (filter)=>{
            dataAPI.getRemoteList(filter,
                (list)=>dispatch(filterChange(filter, list))
            )
        }
    }
}

export default connect(mapStatusToProps, mapDispatchToProps)(FilterGroup)