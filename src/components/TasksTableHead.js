import React from 'react';

const TasksTableHead = () => {
    return (
        <thead>
        <tr className="first-row">
            <th>#</th>
            <th>Task Name</th>
            <th>Created</th>
            <th>{'\u00A0'}</th>
        </tr>
        </thead>
    );
};

export default TasksTableHead;