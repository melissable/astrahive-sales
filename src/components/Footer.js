import React, { Component } from "react";
import { Grid, Button, Icon } from "@material-ui/core";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="section-footer1 light-dark" id="footer1">
        <div className="container">
          <Grid container>
            <Grid item lg={6} md={6} sm={12}>
              <div className="footer1__about">
                <h4>About Us</h4>
                <p>
                  AstraHive is the brainchild of Melissa Capps.<br/>
                  She makes apps.
                </p>
                {/* <Button variant="contained" color="secondary">
                  Contact Us
                </Button> */}
              </div>
            </Grid>
            <Grid item lg={3} md={3} sm={12}>
              <div className="footer1__contact">
                <h4>Contact</h4>
                <div className="px-16 my-32">
                  <Icon className="footer1__contact__icon">mail</Icon>
                  <div className="pl-16">
                    <h5 className="m-0 p-0">Email</h5>
                    <p className="m-0 p-0">info@astrahive.com</p>
                  </div>
                </div>
                <div className="px-16 mt-32">
                  <Icon className="footer1__contact__icon">location_on</Icon>
                  <div className="pl-16">
                    <h5 className="m-0 p-0">Address</h5>
                    <p className="m-0 p-0">Winston-Salem, NC 27101</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item lg={3} md={3} sm={12}>
              <div className="footer1__disclaimer">
                <h4>Disclaimer</h4>
                <p>
                  More details about the demo of this app are coming soon.<br/>
                  We value your private information and signing up for our email list<br/>
                  means we will not sell or distribute your data.
                </p>

                {/* <div className="mt-32 footer1__disclaimer__link">
                  <a href="#linkedin" className="px-8">
                    <img src="./assets/images/social-linkedin.png" alt="" />
                  </a>
                  <a href="#twitter" className="px-8">
                    <img src="./assets/images/social-twitter.png" alt="" />
                  </a>
                  <a href="#facebook" className="px-8">
                    <img src="./assets/images/social-facebook.png" alt="" />
                  </a>
                  
                </div> */}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Footer;
