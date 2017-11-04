import React from 'react';
import "../styles/app.scss";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div id="header"></div>
        {this.props.children}
        <div id="footer"></div>
      </div>
    );
  }
}

export default App;
