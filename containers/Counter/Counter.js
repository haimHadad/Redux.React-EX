import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionType from '../../store/actions';

class Counter extends Component {
    
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResults =>(
                        <li key={strResults.id} onClick={()=>this.props.onDeletResult(strResults.id)}>{strResults.value}</li>
                    ))}        
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
}

const mapDispatchToProps = dispach => {
    return {
        onIncrementCounter: () => dispach({type: actionType.INCREMENT}),
        onDecrementCounter: () => dispach({type: actionType.DECREMENT}),
        onAddCounter: () => dispach({type: actionType.ADD, value: 5}),
        onSubtractCounter: () => dispach({type: actionType.SUBTRACT, value: 5}),
        onStoreResult: (counterVal) => dispach({type: actionType.STORE_RESULT, result: counterVal}),
        onDeletResult: (id) => dispach({type: actionType.DELETE_RESULT, resultEleId: id})
    };
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);