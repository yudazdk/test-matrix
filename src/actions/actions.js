import Axios from 'axios';

export const ActionTypes = {
    ADD_TASK: 'ADD_TASK',
    LOAD_TASKS: 'LOAD_TASKS'
};

export const apiUrl = 'http://localhost/test-matrix/api';

export async function  loadTasks(dispatch) {
    try {
        const response = await Axios.get(apiUrl + '/tasks.php');
        dispatch({type: ActionTypes.LOAD_TASKS, tasks: response.data});
    } catch(error) {
        console.log(error);
    }
}