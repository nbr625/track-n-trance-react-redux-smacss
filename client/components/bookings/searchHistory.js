import React from 'react';
import FlashMessage from '../flash/flashMessage';

class SearchHistory extends React.Component {
  render() {
    const { savedBookings, deleteSavedBooking, clearAllSavedBookings } = this.props;
    return (
      <div id="search-history">
        <div id="sh-title">Saved Bookings</div>
        <div id="saved-bookings-list">
          { savedBookings.map(function(booking) {
              return (
                <div className="saved-booking-field">
                  <div onClick={() => browserHistory.push(`/bookings/${booking}`)}>{booking}</div>
                  <i onClick={() => deleteSavedBooking(booking)} className="fa fa-trash-o" aria-hidden="true"></i>
                </div>
              )
          }) }
        </div>

        <button id="clear-all-button" className="btn subtle-btn" onClick={clearAllSavedBookings}>Clear All</button>
      </div>
    );
  }
}

export default SearchHistory;
