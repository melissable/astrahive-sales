import React, { Component } from 'react';
import { scrollTo } from '../Helpers';
import {
  CallToAction,
  Contact,
  Footer,
  Header,
  Intro,
  Pricing,
  Service3,
  Service4,
  Service5,
  Service6,
  Service7,
  Testimonial,
} from '../components';

export default class User extends Component {
  state = {};
  componentWillUnmount() {
    scrollTo('root');
  }
  
  render() {
    return (
      <div>
        <h2>Users</h2>
      </div>
    );
  }
};
