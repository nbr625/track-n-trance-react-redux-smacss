import React from 'react';

class TaskBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      formValue: ''
    }
    this.erase = this.erase.bind(this);
    this.edit = this.edit.bind(this);
    this.update = this.update.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  erase() {
    let { task, user, tasks, deleteTask } = this.props;
    let newTasks = tasks.filter(function(el) { return el !== task.text });
    deleteTask(user, newTasks, task.text);
  }

  edit(){
    this.setState({ edit: !this.state.edit})
  }

  update(){
    let { task, updateTask } = this.props;
    let { formValue } = this.state;
    updateTask(task.text, formValue)
    this.setState({ edit: false, formValue: '' })
  }

  handleChange(event) {
    this.setState({ formValue: event.target.value });
  }

  render() {
    const { text, saved } = this.props.task;
    return (
      <div className="taskblocks">
        <div>
          <div className="taskblock-name">{text.toUpperCase()}</div>
          { this.state.edit ? (
            <div className="edit-btn-container">
              <input className="text-field" type="text" onChange={this.handleChange} value={this.state.formValue} />
              <button onClick={this.update} className="btn subtle-btn">Edit</button>
            </div>
          ) : null }
        </div>
        <div  className="taskblock-icon">
          { !saved ? <p>UNSAVED</p> : null }
          <i onClick={this.erase} className="fa fa-trash-o" aria-hidden="true"></i>
          <i onClick={this.edit} className="fa fa-pencil-square-o" aria-hidden="true"></i>
        </div>

      </div>
    );
  }
}

export default TaskBlock;
