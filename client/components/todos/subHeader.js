import React from 'react';
import FlashMessage from '../flash/flashMessage'

class SubHeader extends React.Component {
  render() {
    const { saveTasks, handleSubmit, handleChange, flashMessage, formValue } = this.props;
    return (
      <div id="index-subheader">
        <div id="index-title">Tasks</div>
        <div id="btn-container">
          <button onClick={saveTasks} className="btn cta-btn">Save</button>
          <button onClick={handleSubmit} className="btn subtle-btn">Add Task</button>
          <input className="text-field" type="text" onChange={handleChange} value={formValue} />
          { !!flashMessage.text ?
            <FlashMessage message={flashMessage}/>
            : null }
        </div>
      </div>
    );
  }
}

export default SubHeader;
