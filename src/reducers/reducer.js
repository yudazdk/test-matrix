import {ActionTypes} from '../actions/actions';

const initialState = {
    tasks: []
};

const reducer = (state = initialState, action) => {
    let newState = { ...state };

    switch (action.type) {
        case ActionTypes.ADD_TASK:
            break;

        case ActionTypes.LOAD_TASKS:
            newState.tasks = action.tasks;
            break;

        default:
            break;
    }

    return newState;
};

export default reducer;