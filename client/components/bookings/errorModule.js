import React from 'react';
import FlashMessage from '../flash/flashMessage'

// Present if booking could not be located

class ErrorModule extends React.Component {

  componentDidMount(){
      this.props.addFlashMessage('Could not find booking', 'failure')
  }

  render() {
    return (
       <div id="load-err-container" className="cover-picture">
         <div>Sorry we could not find your booking :(</div>
       </div>
    );
  }
}

export default ErrorModule;
