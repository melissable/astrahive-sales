import React, { Component } from "react";
import { debounce, classList } from "../Helpers";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import { NavLink } from "react-router-dom";
import { ScrollTo } from './';

export default class Header extends Component {
  state = {
    isTop: true,
    isClosed: true
  };
  handleScrollRef;

  componentDidMount() {
    if (window) {
      this.handleScrollRef = this.handleScroll();
      window.addEventListener("scroll", this.handleScrollRef);
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener("scroll", this.handleScrollRef);
    }
  }

  handleScroll() {
    return debounce(() => {
      if (window) {
        let isTop = window.scrollY < 100;
        if (isTop !== this.state.isTop) {
          this.setState({ isTop });
        }
      }
    }, 20);
  }

  close = () => {
    this.setState({ isClosed: true });
  };
  
  render() {
    let toggleIcon = this.state.isClosed ? "menu" : "close";
    return (
      <section
        className={classList({
          header: true,
          "header-fixed": !this.state.isTop,
          closed: this.state.isClosed
        })}
      >
        <div className="container header-container navbar-expand-lg">
          <NavLink  to="/" className="brand">
            <img src="./assets/images/AstraHiveLogo.png" alt="AstraHive Logo" />
          </NavLink>
          <ul className="navigation">            
            {/* <li>
              <ScrollTo to="service3" onScroll={this.close}>
                Service
              </ScrollTo>
            </li>
            <li>
              <ScrollTo to="service5" onScroll={this.close}>
                Features
              </ScrollTo>
            </li> */}
            {/* <li>
              <ScrollTo to="pricing1" onScroll={this.close}>
                Pricing
              </ScrollTo>
            </li> */}
            {/* <li>
              <ScrollTo to="contact1" onScroll={this.close}>
                Contact
              </ScrollTo>
            </li> */}
          </ul>
          <div className="m-auto" />
          <Fab
            variant="extended"
            size="large"
            color="secondary"
            aria-label="Demo"
            className="btn-action m-8"
          >
            <NavLink to="/demo">
              {/* <Icon className="mr-16">flight_takeoff</Icon> */}
              Demo
            </NavLink>
          </Fab>
          <IconButton
            className="header__toggle"
            onClick={() => {
              this.setState({ isClosed: !this.state.isClosed });
            }}
          >
            <Icon>{toggleIcon}</Icon>
          </IconButton>
        </div>
      </section>
    );
  }
};
