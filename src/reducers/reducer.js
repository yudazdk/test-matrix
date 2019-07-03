import {ActionTypes} from '../actions/actions';

const initialState = {
    tasks: []
};

const reducer = (state = initialState, action) => {
    let newState = { ...state };
    let taskIndex;

    switch (action.type) {
        case ActionTypes.LOAD_TASKS:
            newState.tasks = action.tasks;
            break;

        case ActionTypes.ENABLE_EDITING:
            newState.tasks = [...state.tasks];
            taskIndex = newState.tasks.findIndex(task => task.id === action.id);

            if ( taskIndex > -1 ) {
                newState.tasks[taskIndex] = {...state.tasks[taskIndex]};
                newState.tasks[taskIndex].editMode = true;
            }
            break;


        case ActionTypes.DISABLE_EDITING:
            newState.tasks = [...state.tasks];
            taskIndex = newState.tasks.findIndex(task => task.id === action.id);

            if ( taskIndex > -1 ) {
                newState.tasks[taskIndex] = {...state.tasks[taskIndex]};
                newState.tasks[taskIndex].editMode = false;
            }

            break;

        default:
            break;
    }

    return newState;
};

export default reducer;