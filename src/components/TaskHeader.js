import React from 'react';

const TaskHeader = (props) => {
    const {completedTasks, totalTasks} = props;

    return (
        <div className="tasks-info row">
            <div className="col-md-3 col-offset-md-1 header-info">
                <label> Total Tasks:</label>
                <span id="toal-tasks" className="text-primary">{totalTasks}</span>
            </div>
            <div className="col-md-3 col-offset-md-1 header-info">
                <label>Completed Tasks: </label>
                <span id="completed-tasks" className="text-success">{completedTasks}</span>
            </div>
            <div className="col-md-3 col-offset-md-1 header-info">
                <label>Remaining Tasks:</label>
                <span id="remaining-tasks" className="text-danger">{totalTasks - completedTasks}</span>
            </div>
        </div>
    );
};

export default TaskHeader;