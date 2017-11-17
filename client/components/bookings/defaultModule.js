import React from 'react';
import FlashMessage from '../flash/flashMessage'

// Home Page banner

class DefaultModule extends React.Component {
  render() {
    return (
       <div id="default-msg-container" className="cover-picture">
          <div>Welcome Search for a crate</div>
        </div>
    );
  }
}

export default DefaultModule;
