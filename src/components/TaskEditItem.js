import React from 'react';

const TaskEditItem = (props) => {
    const {taskItem} = props;

    function convertDate() {
        let dateArr =  taskItem.created_at.split(' ');
        return dateArr[0].split('-').reverse().join('-') + ' ' + dateArr[1];
    }

    function disableEditing() {

    }

    function editTask() {

    }

    function renderButtons() {
        return (
            [
                <button type="button" className="btn btn-success btn-xs"
                        title="ערוך"
                        onClick={editTask.bind(this)}>
                    <i className="fa fa-pencil-square-o"/>
                </button>,
                <button type="button" className="btn btn-danger btn-xs"
                        title="מחק"
                        onClick={disableEditing.bind(this)}>
                    <i className="fa fa-trash-o"/>
                </button>
            ]
        );
    }

    return (
        <tr>
            <td>{taskItem.id}</td>
            <td>{taskItem.name}</td>
            <td>{convertDate()}</td>
            <td>{'\u00A0'}</td>
        </tr>
    );
};

export default TaskEditItem.js;