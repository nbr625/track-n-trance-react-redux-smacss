import React from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/eventActions';
import TextFieldGroup from '../common/TextFieldGroup';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.state)
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, title, isLoading } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Create New Game Event</h1>

        <TextFieldGroup
          name="title"
          value={title}
          field={title}
          label={title}
          onChange={this.onChange}
          errors={errors.title}
        />

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>

      </form>
    );
  }
}

EventForm.propTypes = {
  createEvent: React.PropTypes.func.isRequired
}

export default connect(null, { createEvent })(EventForm);
