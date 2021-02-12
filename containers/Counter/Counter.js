import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../../store/actions/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
        onIncrementCounter: () => dispach(actionCreator.increment()),
        onDecrementCounter: () => dispach(actionCreator.decrement()),
        onAddCounter: () => dispach(actionCreator.add(5)),
        onSubtractCounter: () => dispach(actionCreator.substract(5)),
        onStoreResult: (counterVal) => dispach(actionCreator.store_result(counterVal)),
        onDeletResult: (id) => dispach(actionCreator.delete_result(id))
    };
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);