import * as actionType from '../actions/actionTypes';
import {updateObject} from '../reducerUtility';

const initialState = {
    results: []
}

const deleteResult = (state, action) =>{
    const updatedArray = state.results.filter(res => res.id !== action.resultEleId);
    return updateObject(state, {results: updatedArray});
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date() , value: action.result})});
        case actionType.DELETE_RESULT:
            return deleteResult(state, action);
        default:
            return state;
    }
}

export default reducer;