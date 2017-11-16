import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import BookingPage from './components/bookings/bookingsPage';
import DefaultModule from './components/bookings/defaultModule';
import BookingDetails from './components/bookings/bookingDetails';

import App from './components/App';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/bookings" />
    <Route path="/bookings" component={BookingPage}>
      <IndexRoute component={DefaultModule} />
      <Route path=":id" component={BookingDetails} />
    </Route>
  </Route>
)
