import React from 'react';

class AddTaskModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };
    }

    addTask = () => {
        let taskName = this.state.name;
        this.setState({name: ''});
        this.props.addTask(taskName);
    };

    changeField = (event) => {
        this.setState({name: event.target.value});
    };

    setDisplay() {
        if (this.props.show) {
            return {display: "block"};
        } else {
            return {display: "none"};
        }
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
        this.validateForm();

        return (
            <div className={"modal fade" + (this.props.show ? " in" : "")} style={this.setDisplay()} id="modal-task" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h4 className="modal-title">Add Task</h4>
                        </div>

                        <div className="modal-body">
                            <div className="form-group row">
                                <label htmlFor="name" className="col-md-3"> Name: </label>
                                <div className="col-md-4">
                                    <input id="name" className="form-control" style={this.inputStyle} type="text" value={this.state.name}
                                           onChange={this.changeField}/>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-default" onClick={this.props.hideAddModal}>Close</button>
                            <button className="btn btn-primary" onClick={this.addTask} disabled={this.disabledButton}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTaskModal;