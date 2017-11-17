import React from 'react';
import "../styles/app.scss";

// Main App Component. Used to handle routing and main template.

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div id="header">
          <i className="fa fa-ship" aria-hidden="true"></i>
          <div>T&T Shipping</div>
        </div>
        {this.props.children}
        <div id="footer"></div>
      </div>
    );
  }
}

export default App;
