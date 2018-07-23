import {connect} from 'react-redux'
import dataAPI from '../api/dataAPI'
import {add} from '../action/index'
import AddInput from '../component/AddInput';


const mapStateToProps = (state, props) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddInput: (text) => {
            dataAPI.addItemRemote(text, (list)=>{
                dispatch(add(list))
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddInput)