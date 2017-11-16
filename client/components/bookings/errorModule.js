import React from 'react';
import FlashMessage from '../flash/flashMessage'

class ErrorModule extends React.Component {
  render() {
    const { tryToLoadAgain } = this.props;
    return (
       <div id="load-err-container">
          <i onClick={tryToLoadAgain} className="fa fa-refresh reload-icon" aria-hidden="true"></i>
          <div id="load-err-msg">Try Again?</div>
        </div>
    );
  }
}

export default ErrorModule;
