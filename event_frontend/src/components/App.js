import React, { Component, PropTypes } from 'react';
import '../stylesheets/main.scss';

class App extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ])
  }

  render() {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    );
  }
}

export default App;
