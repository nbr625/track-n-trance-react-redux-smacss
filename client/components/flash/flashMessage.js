import React from 'react';
import classnames from 'classnames';
import AnimateOnChange from 'react-animate-on-change';

class FlashMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'initial'
    }
  }

  componentWillReceiveProps(nextProps){
    let { id } = this.state;
    if(id !== nextProps.message.id){
      this.setState({ id: this.props.message.id })
    }
  }

  render() {
    const { status, text, id } = this.props.message;
    // classname module allow us to programatically
    // set the className for our flashMessage
    let styles = classnames('alert', {
      'alert-success': status === 'success',
      'alert-failure': status === 'failure'
    });
    // AnimateOnChange allow us to trigger animations
    // on new properties (normally this is not the case.)
    return (
      <AnimateOnChange
          baseClassName={styles}
          animationClassName="fade-in-and-out"
          animate={ id !== this.state.id }>
        <div></div>
        {text}
        <button onClick={this.props.deleteFlashMessage} className="close">X</button>
      </AnimateOnChange>


    );
  }
}

export default FlashMessage;
