import React from 'react';
import FlashMessage from '../flash/flashMessage'

class SubHeader extends React.Component {
  render() {
    const { handleSubmit, handleChange, flashMessage, formValue, deleteFlashMessage } = this.props;
    return (
      <div id="index-subheader">
        <div id="btn-container">
          <button onClick={handleSubmit} className="btn subtle-btn">Search</button>
          <input className="text-field" type="text" onChange={handleChange} value={formValue} />
          { flashMessage.status !== 'deleted' ?
            <FlashMessage message={flashMessage} deleteFlashMessage={deleteFlashMessage} />
            : null }
        </div>
      </div>
    );
  }
}

export default SubHeader;
