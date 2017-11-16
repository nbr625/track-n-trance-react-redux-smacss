import React from 'react';
import { connect } from 'react-redux';
import { deleteSavedBooking, clearAllSavedBookings, setActiveBooking } from '../../actions/search';
import { deleteFlashMessage } from '../../actions/flashMessages';
import PropTypes from 'prop-types';
import SubHeader from './subHeader';
import SearchHistory from './searchHistory'
import { browserHistory } from 'react-router'

class BookingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formValue: ''
    }
    this.handleSubmit= this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ formValue: event.target.value });
  }

  handleSubmit(){
    let { formValue } = this.state;
    if(formValue !== ''){
      browserHistory.push(`/bookings/${formValue}`)
    }


  }

  render() {
    const {  flashMessage, savedBookings, deleteSavedBooking, clearAllSavedBookings, deleteFlashMessage } = this.props;
    const { user, formValue } = this.state;
    return (
      <div id="todo-index">
        <SubHeader handleChange={this.handleChange}
                   handleSubmit={this.handleSubmit}
                   flashMessage={flashMessage}
                   deleteFlashMessage={deleteFlashMessage}
                   formValue={formValue} />

        <div id="divider">
          <SearchHistory savedBookings={savedBookings}
                         deleteSavedBooking={deleteSavedBooking}
                         clearAllSavedBookings={clearAllSavedBookings} />

          {this.props.children}

        </div>


      </div>
    );
  }
}

BookingPage.propTypes = {
  deleteSavedBooking: PropTypes.func.isRequired,
  clearAllSavedBookings: PropTypes.func.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {
    savedBookings: state.search.savedBookings,
    flashMessage: state.flashMessage
  }
}

export default connect(mapStateToProps, { deleteSavedBooking, setActiveBooking, clearAllSavedBookings, deleteFlashMessage })(BookingPage);
