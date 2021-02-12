import * as actionType from './actionTypes';

export const increment = () =>{
    return {type: actionType.INCREMENT};
}

export const decrement = () =>{
    return {type: actionType.DECREMENT};
}

export const add = (val) =>{
    return {type: actionType.ADD, value: val};
}

export const substract = (val) =>{
    return {type: actionType.SUBTRACT, value: val};
}
