import { Action } from 'redux';

interface outputState {}

const initialState: outputState = {};

const outputReducer = (state = initialState, action: Action<string>): outputState => {
    switch (action.type) {
        default:
            return state;
    }
};

export default outputReducer;
