import React from 'react';


class TaskEditItem extends React.Component {
    convertDate() {
        let dateArr =  this.props.taskItem.created_at.split(' ');
        return dateArr[0].split('-').reverse().join('-') + ' ' + dateArr[1];
    }

    disableEditing = () => {
        this.props.disableEditing(this.props.taskItem.id);
    };

    editTask= () => {

    };

    renderButtons() {
        return (
            [
                <button type="button" className="btn btn-success btn-xs"
                        title="ערוך"
                        onClick={this.editTask.bind(this)}>
                    <i className="fa fa-floppy-o"/>
                </button>,
                <button type="button" className="btn btn-danger btn-xs"
                        title="מחק"
                        onClick={this.disableEditing.bind(this)}>
                    <i className="fa fa-times"/>
                </button>
            ]
        );
    }

    render() {
        const {taskItem} = this.props;

        return (
            <tr>
                <td>{taskItem.id}</td>
                <td>{taskItem.name}</td>
                <td>{this.convertDate()}</td>
                <td>{this.renderButtons()}</td>
            </tr>
        );
    }
}

export default TaskEditItem;