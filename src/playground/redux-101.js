import { createStore } from 'redux';

//Action generator - returns an action object with type and data passed in from store.dispatch call
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    // incrementBy: incrementBy
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

//Reducer - actually changes state value based on what action type is called
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default: 
            return state
    }
};

//Creates store and uses one reducer
const store = createStore(countReducer);

//Subscribes to store to see changes when state changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Dispatch calls with action object passed in without using action generator:

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

// store.dispatch({
//     type: 'INCREMENT'
// });

//Dispatch call with using action generator
store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubscribe();

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 101 }));