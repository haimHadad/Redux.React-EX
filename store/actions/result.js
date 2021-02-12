import * as actionsType from './actionTypes';

export const saveResult = (res) => {
    return {
        type: actionsType.STORE_RESULT, result: res
    };
}

export const store_result = (res) =>{
    return dispatch => {
        setTimeout(()=>{
             dispatch(saveResult(res));
        },2000)
    } 
}
export const delete_result = (resElId) =>{
    return {type: actionsType.DELETE_RESULT, resultEleId: resElId};
}