import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { LatestSales, Sidebar, Topbar, TourFooter } from '../components';
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';

const styles = {
  large: {
    fontSize: 60,
    fontWeight: 'bold'
  },
  small: {
    opacity: 0.7,
    fontSize: 16
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 50,
    padding: theme.spacing(4),
    marginLeft: theme.spacing(5)
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    marginTop: theme.spacing(5),
    height: '100%',
    marginLeft: theme.spacing(5)
  },
}));

const Insights = (props) => {
  const { children } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

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
        <h4>Currently tracked hashtags:</h4>
        <div className='app-outer'>
          <div className='app-inner'>
            <TagCloud 
              className='tag-cloud'
              style={{
                fontFamily: 'sans-serif',
                //fontSize: () => Math.round(Math.random() * 50) + 16,
                fontSize: 30,
                color: () => randomColor({
                  hue: 'blue'
                }),
                padding: 5,
              }}>
              <div
                style={{
                  fontFamily: 'serif',
                  fontSize: 40,
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  color: randomColor()
                }}>Futurama</div>
              <div style={styles.large}>Etsy</div>
              <div style={styles.large}>Squarespace</div>
              <div style={styles.large}>bespoke</div>
              <div style={styles.large}>Salesforce</div>
              <div style={{fontFamily: 'courier'}}>Quickbooks</div>
              <div style={{fontSize: 30}}>Instagram</div>
              <div style={{fontStyle: 'italic'}}>tailored</div>
              <div style={{fontWeight: 200}}>Shopify</div>
              <div style={{color: 'green'}}>creative</div>
              <div>local</div>
              <div>weddings</div>
              <div>crafty</div>
              <div>seamstress</div>
              <div>artist</div>
              <div>Xero</div>
              <div>upsell</div>
              <div>handsewn</div>
              <div>sewing</div>
              <div>artisan</div>
              <div>Star Wars</div>
              <div>hoodie</div>
              <div>handmade</div>
              <div>Amazon</div>
              <div>arbitrage</div>
              <div>fashion</div>
              <div>handcrafted</div>
              <div>Asana</div>
              <div style={styles.small}>Shipstation</div>
              <div style={styles.small}>Square</div>
              <div style={styles.small}>Facebook</div>
              <div style={styles.small}>Pinterest</div>
              <div style={styles.small}>Hootsuite</div>
              <div style={styles.small}>custom</div>
              <div style={styles.small}>organic</div>
            </TagCloud>
          </div>
        </div>
      </main>
    </div>
  );
};

Insights.propTypes = {
  children: PropTypes.node
};

export default Insights;
