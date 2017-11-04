import React from 'react';

class TaskBlock extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    let { task, user, tasks } = this.props;
    let newTasks = tasks.filter(function(el) { return el !== task.text });
    this.props.deleteTask(user, newTasks, task.text);
  }

  render() {
    const { text, saved } = this.props.task;
    return (
      <div className="taskblocks">
        <div className="taskblock-name">{text.toUpperCase()}</div>
        <div onClick={this.onClick} className="taskblock-icon">
          { !saved ? <p>UNSAVED</p> : null }
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default TaskBlock;
