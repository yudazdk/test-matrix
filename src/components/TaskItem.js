import React from 'react';

const TaskItem = (props) => {
    const {taskItem} = props;

    function convertDate() {
        let dateArr =  taskItem.created_at.split(' ');
        return dateArr[0].split('-').reverse().join('-') + ' ' + dateArr[1];
    }

    function getClass() {
        return taskItem.is_completed === '1' ? 'task-completed' : '';
    }

    return (
        <tr>
            <td>{taskItem.id}</td>
            <td className={getClass()}>{taskItem.name}</td>
            <td>{convertDate()}</td>
            <td>{'\u00A0'}</td>
        </tr>
    );
};

export default TaskItem;