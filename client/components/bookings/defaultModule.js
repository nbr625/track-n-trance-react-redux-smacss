import React from 'react';
import FlashMessage from '../flash/flashMessage'

class DefaultModule extends React.Component {
  render() {
    return (
       <div id="load-err-container">
          <div id="load-err-msg">Welcome Search for a crate</div>
        </div>
    );
  }
}

export default DefaultModule;
