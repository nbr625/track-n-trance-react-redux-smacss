import React from 'react';
import { connect } from 'react-redux';
import { fetchTasks, addTask, updateTask, deleteTask, saveTasks } from '../../actions/todoActions';
import { addFlashMessage, deleteFlashMessage } from '../../actions/flashMessages';
import { isUnique, onlyText } from '../../utils/common';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import SubHeader from './subHeader';
import TaskList from './taskList';

class TodoIndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: props.user || 'nicolas',
      failedLoad: false,
      formValue: ''
    }
    this.handleSubmit= this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.tryToLoadAgain = this.tryToLoadAgain.bind(this);
    this.saveTasks = this.saveTasks.bind(this);
    this.isUnique = isUnique;
    this.onlyText = onlyText;
  }
  componentDidMount() {
    let { fetchTasks, addFlashMessage } = this.props;
    fetchTasks(this.state.user);
  }

  handleChange(event) {
    this.setState({ formValue: event.target.value });
  }

  saveTasks(){
    let onlyTextArray = this.onlyText(this.props.tasks);
    this.props.saveTasks(this.state.user, onlyTextArray);
  }

  handleSubmit(event) {
    event.preventDefault();
    let { formValue } = this.state;
    let { tasks, addFlashMessage } = this.props;
    if(formValue !== '' && this.isUnique(tasks, formValue)) {
      this.props.addTask(formValue);
      this.setState({ formValue: '' });
    } else {
      addFlashMessage('That task already exists', 'failure');
    }

  }

  tryToLoadAgain() {
    this.props.fetchTasks(this.state.user);
  }

  render() {
    const {  deleteTask, tasks, unsavedTasks, flashMessage, deleteFlashMessage, updateTask } = this.props;
    const { user, formValue } = this.state;
    return (
      <div id="todo-index">
        <SubHeader saveTasks={this.saveTasks}
                   handleChange={this.handleChange}
                   handleSubmit={this.handleSubmit}
                   unsavedTasks={unsavedTasks}
                   flashMessage={flashMessage}
                   deleteFlashMessage={deleteFlashMessage}
                   formValue={formValue} />

        <TaskList flashMessage={flashMessage}
                  tasks={tasks}
                  user={user}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                  tryToLoadAgain={this.tryToLoadAgain}/>
      </div>
    );
  }
}

TodoIndexPage.propTypes = {
  fetchTasks: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {
    tasks: state.tasks.tasks,
    unsavedTasks: state.tasks.unsavedTasks,
    flashMessage: state.flashMessage
  }
}

export default connect(mapStateToProps, { fetchTasks, deleteTask, addTask, updateTask, saveTasks, addFlashMessage, deleteFlashMessage })(TodoIndexPage);
