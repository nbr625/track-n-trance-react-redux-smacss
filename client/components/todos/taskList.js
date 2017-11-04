import React from 'react';
import ReloadModule from './reloadModule';
import TaskBlock from './taskBlock';
import { onlyText } from '../../utils/common';

class TaskList extends React.Component {
  render() {
    const { flashMessage, tasks, user, deleteTask, updateTask, tryToLoadAgain } = this.props;
    let taskNames = onlyText(tasks);

    if (flashMessage.text !== 'Sorry, failed to load') {
      return (
        <div id="task-list-container">
          { tasks.slice(0).reverse().map(function(task, i){
            return <TaskBlock key={i}
                              task={task}
                              tasks={taskNames}
                              user={user}
                              updateTask={updateTask}
                              deleteTask={deleteTask}/> })}
        </div>
      );
    } else {
      return <ReloadModule tryToLoadAgain={tryToLoadAgain} />
    }
  }
}

export default TaskList;
