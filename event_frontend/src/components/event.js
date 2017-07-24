import React from 'react';
import HeaderBar from './header-bar/header-bar';
import NavigationMenu from './navigation-menu';
import ControlPanel from './control-panel';

export default class Event extends React.Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <NavigationMenu />
      </div>
    );
  }
}
