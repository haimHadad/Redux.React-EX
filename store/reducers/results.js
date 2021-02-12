import * as actionType from '../actions/actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date() , value: action.result})
            };
        case actionType.DELETE_RESULT:
            const updatedArray = state.results.filter(res => res.id !== action.resultEleId);

            return {
                ...state,
                results: updatedArray
            };

        default:
            return state;
    }
}

export default reducer;