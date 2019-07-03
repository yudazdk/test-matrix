import React from 'react';

const TaskEditItem = (props) => {
    const {taskItem, disableEditing} = props;

    function convertDate() {
        let dateArr =  taskItem.created_at.split(' ');
        return dateArr[0].split('-').reverse().join('-') + ' ' + dateArr[1];
    }

    function disableEditingItem() {
        disableEditing(taskItem.id);
    }

    function editTask() {

    }

    function renderButtons() {
        return (
            [
                <button type="button" className="btn btn-success btn-xs"
                        title="ערוך"
                        onClick={editTask.bind(this)}>
                    <i className="fa fa-floppy-o"/>
                </button>,
                <button type="button" className="btn btn-danger btn-xs"
                        title="מחק"
                        onClick={disableEditingItem.bind(this)}>
                    <i className="fa fa-times"/>
                </button>
            ]
        );
    }

    return (
        <tr>
            <td>{taskItem.id}</td>
            <td>{taskItem.name}</td>
            <td>{convertDate()}</td>
            <td>{renderButtons()}</td>
        </tr>
    );
};

export default TaskEditItem;