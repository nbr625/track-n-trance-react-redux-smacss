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
    let styles = classnames('alert', {
      'alert-success': status === 'success',
      'alert-failure': status === 'failure'
    });
    let variable = id !== this.state.id
    return (
      <AnimateOnChange
          baseClassName={styles}
          animationClassName="fade-in-and-out"
          animate={ id !== this.state.id }>
        {text}
      </AnimateOnChange>


    );
  }
}

export default FlashMessage;
