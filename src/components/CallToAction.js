import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";

class CallToAction2 extends Component {
  state = {};
  render() {
    return (
      <section className="section section-cta2 light-gray" id="cta2">
        <div>
          <div id="mc_embed_signup">
          <form action="https://txable.us5.list-manage.com/subscribe/post?u=71ce0640ca8695b91810cc50a&amp;id=fb306ed87f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
            
            <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required />
              <div aria-hidden="true"><input type="text" name="b_71ce0640ca8695b91810cc50a_fb306ed87f" tabindex="-1" value="" /></div>
              <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" /></div>
              </div>
          </form>
          </div>
        </div>
        <div className="container text-center">
          <h2 className="mb-32">Subscribe & Request a demo</h2>
          <div className="subscribe-input">
            <input
              className="email-input"
              type="text"
              placeholder="Your email"
            />
            <Fab
              variant="extended"
              size="large"
              color="primary"
              aria-label="Buy"
              className="btn-action m-8"
            >
              <Icon className="mr-16">flight_takeoff</Icon>
              Subscribe
            </Fab>
          </div>
        </div>
      </section>
    );
  }
}

export default CallToAction2;
