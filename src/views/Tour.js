import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Sidebar, Topbar, TourFooter } from '../components';
import { Dashboard } from './';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  }
}));

const Tour = props => {
  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar, isTourOpen, setOpenTour] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const closeTour = () => {
    if (isTourOpen) {
      setOpenTour(false);
    }
  };

  const openTour = () => {
    if (!isTourOpen) {
      setOpenTour(true);
    }
  };

  const steps = [
    {
      selector: '[newstep="first-step"]',
      content: 'This is my first Step'
    },
    {
      selector: '[newstep="second-step"]',
      content: 'This is my second Step'
    },
    {
      selector: '[newstep="third-step"]',
      content: 'This is my third Step'
    },
  ]

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        <Dashboard />
        <button onClick={openTour}>Open tour</button>
        <TourFooter />
      </main>
      {/* <Tour
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={closeTour}
      /> */}
    </div>
  );
};

Tour.propTypes = {
  children: PropTypes.node
};

export default Tour;
