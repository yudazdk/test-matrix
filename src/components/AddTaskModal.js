import React from 'react';

class AddTaskModal extends React.Component {
    changeField(event) {

    }

    render() {
        return (
            <div className="modal fade" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-header">
                        <h4 className="modal-title">Add Task</h4>
                    </div>

                    <div className="modal-body">
                        <div className="form-group row">
                            <label htmlFor="name" className="col-md-3"> Name: </label>
                            <div className="col-md-4">
                                <input id="name" className="form-control" type="text" value="" onChange={this.changeField.bind(this)}/>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" onClick={this.props.hideAddModal}>Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTaskModal;