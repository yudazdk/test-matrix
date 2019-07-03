import React from 'react';
import { connect } from "react-redux";

import '../css/todo.css';

import TaskHeader from './TaskHeader';
import TasksTableHead from './TasksTableHead';
import TaskItem from './TaskItem';
import TaskEditItem from './TaskEditItem';
import AddTaskModal from './AddTaskModal';

import * as TaskActions from '../actions/actions';

class Tasks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            addModal: {
                show: false
            }
        };
    }

    componentDidMount() {
        TaskActions.loadTasks(this.props.dispatch);
    }

    disableEditing = (id) => {
        this.props.dispatch({type: TaskActions.ActionTypes.DISABLE_EDITING, id});
    };

    enableEditing = (id) => {
        this.props.dispatch({type: TaskActions.ActionTypes.ENABLE_EDITING, id});
    };

    deleteTask = (id) => {
        TaskActions.deleteTask(this.props.dispatch, id);
    };

    addTask = (name) => {
        TaskActions.addTask(this.props.dispatch, name);

        this.hideAddModal();
    };

    hideAddModal = () => {
        let addModal = this.state.addModal;
        addModal.show = false;
        this.setState({addModal});
    };

    showAddModal =() => {
        let addModal = this.state.addModal;
        addModal.show = true;
        this.setState({addModal});
    };

    countCompletedTssks() {
        return this.props.tasks.reduce((completedTasks, task) => {
            return task.is_completed === '1' ? ++completedTasks : completedTasks;
        }, 0);
    }

    renderTasks() {
        return this.props.tasks.map( (task, index) => {
            if ( task.editMode ) {
                return <TaskEditItem key={task.id} taskItem={task} disableEditing={this.disableEditing}/>;
            } else {
                return <TaskItem key={task.id} taskItem={task} deleteTask={this.deleteTask} enableEditing={this.enableEditing}/>;
            }
        });
    }

    render () {
        const {props, state} = this;

        return (
            <React.Fragment>
                <div className="container">

                    <TaskHeader completedTasks={this.countCompletedTssks()} totalTasks={props.tasks.length}/>

                    <table className="table table-bordered table-striped">
                        <TasksTableHead/>

                        <tbody id="table-body">
                            {this.renderTasks()}
                        </tbody>
                    </table>

                    <button onClick={this.showAddModal} className="btn btn-primary">Add Task</button>
                </div>

                <AddTaskModal show={state.addModal.show} hideAddModal={this.hideAddModal} addTask={this.addTask}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    };
};

export default connect(mapStateToProps) (Tasks);
