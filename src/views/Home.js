import React, { Component } from 'react';
import { scrollTo } from '../Utils';
import {
  CallToAction2,
  Contact1,
  Footer1,
  Header,
  Intro3,
  Pricing1,
  Service3,
  Service4,
  Service5,
  Service6,
  Service7,
  Testimonial3,
} from '../components';

export default class Home extends Component {
  state = {};
  componentWillUnmount() {
    scrollTo('root');
  }
  
  render() {
    return (
      <div className="landing">
        <Header/>
        <Intro3/>
        <Service3 />
        <Service4 />
        <Service5 />
        <Service6 />
        <Service7 />
        <Testimonial3 />
        <CallToAction2 />
        <Pricing1 />
        <Contact1 />
        <Footer1 />
      </div>
    );
  }
};
