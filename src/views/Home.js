import React, { Component } from 'react';
import { scrollTo } from '../Utils';
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

export default class Home extends Component {
  state = {};
  componentWillUnmount() {
    scrollTo('root');
  }
  
  render() {
    return (
      <div className="landing">
        <Header />
        <Intro/>
        {/* <Service3 />
        <Service4 />
        <Service5 />
        <Service6 />
        <Service7 />
        <Testimonial /> */}
        {/* <CallToAction /> */}
        {/* <Pricing /> */}
        {/* <Contact /> */}
        <Footer />
      </div>
    );
  }
};
