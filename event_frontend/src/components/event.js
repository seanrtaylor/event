import React from 'react';
import HeaderBar from './header-bar/header-bar';
import NavigationMenu from './navigation-menu';
import ControlPanel from './control-panel';

import InfoTile from './info-tile/info-tile'

export default class Event extends React.Component {
  render() {
    return (
      <div className="full-size">
        <HeaderBar />
        <NavigationMenu />
        <div className="content-wrapper">
          <section className="content-header">
            <h1>Dashboard</h1>
          </section>
          <section className="content">
            <InfoTile
              width='3'
              content=''
              icon='fa-envelope-o'
              stats='1,410'
              subject='Messages'
              theme='bg-aqua'
            />
          </section>
        </div>
      </div>
    );
  }
}
