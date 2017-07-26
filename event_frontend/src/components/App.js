import React, { Component, PropTypes } from 'react';
import '../stylesheets/main.scss';
import HeaderBar from './header-bar/header-bar';
import NavigationMenu from './nav-bar/navigation-menu';
import ControlPanel from './control-panel';

class App extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ])
  }

  render() {
    return (
      <div className="full-size">
        <HeaderBar />
        <NavigationMenu />
        {this.props.children}
      </div>
    );
  }
}

export default App;
