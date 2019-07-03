import React from 'react';

const TaskItem = (props) => {
    const {taskItem, enableEditing, deleteTask} = props;

    function convertDate() {
        let dateArr =  taskItem.created_at.split(' ');
        return dateArr[0].split('-').reverse().join('-') + ' ' + dateArr[1];
    }

    function getClass() {
        return taskItem.is_completed === '1' ? 'task-completed' : '';
    }

    function enableEditingItem(id) {
        enableEditing(taskItem.id);
    }

    function deleteTaskItem() {
        deleteTask(taskItem.id)
    }

    function renderButtons() {
        return (
            [
            <button key={0} type="button" className="btn btn-success btn-xs"
                    title="ערוך"
                    onClick={enableEditingItem.bind(this)}>
                <i className="fa fa-pencil-square-o"/>
            </button>,
            <button key={1} type="button" className="btn btn-danger btn-xs"
                title="מחק"
                onClick={deleteTaskItem.bind(this)}>
                <i className="fa fa-trash-o"/>
            </button>
        ]
        );
    }

    return (
        <tr>
            <td>{taskItem.id}</td>
            <td className={getClass()}>{taskItem.name}</td>
            <td>{convertDate()}</td>
            <td>{renderButtons()}</td>
        </tr>
    );
};

export default TaskItem;