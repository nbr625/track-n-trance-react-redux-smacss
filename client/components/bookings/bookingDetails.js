import React from 'react';
import { connect } from 'react-redux';
import { fetchBooking, saveBooking } from '../../actions/search';
import { addFlashMessage } from '../../actions/flashMessages';
import PropTypes from 'prop-types';
import ErrorModule from './errorModule';
import BookingTable from './bookingTable';
import { isEmpty } from '../../utils/common.js';

// Houses BookingTable, gathers redux data, passes down data to Booking table
// dispatches actions from componentDidMount, componentWillReceiveProps
// and saveToHistory

// Smart Component

class BookingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.params.id
    }
    this.saveToHistory = this.saveToHistory.bind(this);
    this.isEmpty = isEmpty;
  }

  // Since we want this to work by using the url, we will get the
  // id argument from the url parameter and dispatch the fetchBooking action
  componentDidMount(){
    let { fetchBooking, params, activeBooking, error } = this.props;
    if(!error) {
      fetchBooking(params.id.substring(4));
    }
  }

  // This is necessary to dispatch the fetchBooking action after
  // the first render; componenetWillMount will not be called
  // since React will want to avoid a re-render if the same
  // component is used.
  componentWillReceiveProps(nextProps){
    let { id } = nextProps.params;
    if(nextProps.params.id !== this.state.id){
      this.setState({ id },
        this.props.fetchBooking(id.substring(4))
      );
    }
  }

  // calls action to add the new argument to saved bookings
  saveToHistory(){
    let { activeBooking, saveBooking } = this.props;
    saveBooking(`PABV${activeBooking.booking_number}`)
  }

  render() {
    let { activeBooking, error, addFlashMessage } = this.props;
    return (
      <div className="booking-details">
        { !error && !this.isEmpty(activeBooking) ? (
          <div>
            <BookingTable activeBooking={activeBooking} />
            <button id="save-button" className="btn subtle-btn" onClick={this.saveToHistory}>Save</button>
          </div>
        )
          : <ErrorModule addFlashMessage={addFlashMessage} /> }
      </div>
    );
  }
}

// Verifies the presence of this props
BookingDetails.propTypes = {
  fetchBooking: PropTypes.func.isRequired,
  saveBooking: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {
    savedBookings: state.search.savedBookings,
    activeBooking: state.bookings.activeBooking,
    error: state.bookings.error
  }
}

// connects to redux state
export default connect(mapStateToProps, { fetchBooking, saveBooking, addFlashMessage })(BookingDetails);
