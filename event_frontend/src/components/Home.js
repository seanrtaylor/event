import React from 'react';
import Event from './events/Event';
import { Link } from 'react-router';

// Home page component
export default class Home extends React.Component {
  render() {
    return (
      <div className='page-home'>
        <Event />
      </div>
    );
  }
}
