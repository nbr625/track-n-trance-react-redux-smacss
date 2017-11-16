import React from 'react';
import FlashMessage from '../flash/flashMessage';
import { isEmpty } from '../../utils/common';

class BookingTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showUpdates: false
    };
    this.isEmpty = isEmpty;
    this.toggleUpdates = this.toggleUpdates.bind(this);
  }

  toggleUpdates(){
    this.setState({ showUpdates: !this.state.showUpdates })
  }



  render() {
    let { booking_number, origin, destination, updates, containers } = this.props.activeBooking;
    let { showUpdates } = this.state;

    return (
      <table id="booking-table">
        <tbody>
          <tr>
            <td className="table-title" className="table-title" id="table-header">Booking</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>B/L Number</td>
            <td>{booking_number}</td>
          </tr>
          <tr>
            <td>Streamship Line</td>
            <td>{origin}</td>
          </tr>
          <tr>
            <td>Origin</td>
            <td>{origin}</td>
          </tr>
          <tr>
            <td>Destination</td>
            <td>{destination}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="table-title" onClick={this.toggleUpdates}>{ showUpdates ? 'Hide Upates' : 'Show Updates' }</td>
          </tr>
        </tbody>
        { !showUpdates ? null : updates.map((update, i) => (
          <tbody key={i}>
            <tr>
              <td>Vessel</td>
              <td>{update.vessel}</td>
            </tr>
            <tr>
              <td>Voyage</td>
              <td>{update.voyage}</td>
            </tr>
            <tr>
              <td>Vessel ETA</td>
              <td>{update.vessel_eta}</td>
            </tr>
          </tbody>

        )) }
        <tbody>
          <tr>
            <td className="table-title">Container List</td>
          </tr>
        </tbody>
        { containers.map((container, i) => (
          <tbody key={i}>
            <tr>
              <td>Number</td>
              <td>{container.number}</td>
            </tr>
            <tr>
              <td>Size</td>
              <td>{container.size}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>{container.type}</td>
            </tr>
            <tr>
              <td>Current Location</td>
              <td>{container.location}</td>
            </tr>
            <tr>
              <td>Last Status at</td>
              <td>{container.last_status_at}</td>
            </tr>
            <tr>
              <td>Last Status</td>
              <td>{container.last_status}</td>
            </tr>
          </tbody>

        )) }
      </table>
    );
  }
}

export default BookingTable;
