import React from 'react';


class TaskEditItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.taskItem.name,
            is_completed: props.taskItem.is_completed
        };
    }

    changeIsCompleted = () => {
        let newIsCompleted = this.state.is_completed === '1' ? '0': '1';
        this.setState({is_completed: newIsCompleted});
    };

    changeName = (event) => {
        this.setState({name: event.target.value});
    };

    disableEditing = () => {
        this.props.disableEditing(this.props.taskItem.id);
    };

    editTask= () => {
        let taskFields = {
            id: this.props.taskItem.id,
            name: this.state.name,
            is_completed: this.state.is_completed
        };
        this.props.editTask(taskFields);
    };

    renderButtons() {
        return (
            [
                <button key={0} type="button" className="btn btn-success btn-xs"
                        title="שמור" disabled={this.disabledButton}
                        onClick={this.editTask.bind(this)}>
                    <i className="fa fa-floppy-o"/>
                </button>,
                <button key={1} type="button" className="btn btn-danger btn-xs"
                        title="בטל"
                        onClick={this.disableEditing.bind(this)}>
                    <i className="fa fa-times"/>
                </button>
            ]
        );
    }

    validateForm() {
        this.disabledButton = false;
        this.inputStyle = {};

        if ( this.state.name.length === 0 ) {
            this.disabledButton = true;
            this.inputStyle = {borderColor: "#cc0000"};
        }
    }

    render() {
        const {taskItem} = this.props;

        this.validateForm();

        return (
            <tr>
                <td>{taskItem.id}</td>
                <td>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-md-3"> Name: </label>
                        <div className="col-md-4">
                            <input id="name" className="form-control" style={this.inputStyle} type="text"
                                   value={this.state.name}
                                   onChange={this.changeName}/>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-md-3"> Completed: </label>
                        <input type="checkbox" checked={this.state.is_completed === '1'}
                               style={this.inputStyle} onChange={this.changeIsCompleted}/>
                    </div>
                </td>
                <td>{this.renderButtons()}</td>
            </tr>
        );
    }
}

export default TaskEditItem;