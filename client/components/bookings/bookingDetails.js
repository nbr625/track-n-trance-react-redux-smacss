import React from 'react';
import { connect } from 'react-redux';
import { fetchBooking, saveBooking } from '../../actions/search';
import PropTypes from 'prop-types';
import ErrorModule from './errorModule';
import BookingTable from './bookingTable';
import { isEmpty } from '../../utils/common.js';

class BookingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.saveToHistory = this.saveToHistory.bind(this);
    this.isEmpty = isEmpty;
  }

  componentDidMount(){
    let { fetchBooking, params, activeBooking, error } = this.props;
    if(!error) {
      fetchBooking(params.id.substring(4));
    }
  }

  saveToHistory(){
    let { activeBooking, saveBooking } = this.props;
    saveBooking(`PABV${activeBooking.booking_number}`)
  }

  render() {
    let { activeBooking, error } = this.props;
    return (
      <div className="booking-details">
        { !error && !this.isEmpty(activeBooking) ? (
          <div>
            <BookingTable activeBooking={activeBooking} />
            <button id="save-button" className="btn subtle-btn" onClick={this.saveToHistory}>Save</button>
          </div>
        )
          : null }
      </div>
    );
  }
}

BookingDetails.propTypes = {
  fetchBooking: PropTypes.func.isRequired,
  saveBooking: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {
    savedBookings: state.search.savedBookings,
    activeBooking: state.bookings.activeBooking,
    error: state.bookings.error
  }
}

export default connect(mapStateToProps, { fetchBooking, saveBooking })(BookingDetails);
