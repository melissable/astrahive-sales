import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { LatestSales, Sidebar, Topbar, TourFooter } from '../components';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 50,
    padding: theme.spacing(4)
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    marginTop: theme.spacing(2),
    height: '100%',
    marginLeft: theme.spacing(2)
  }
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
        <div class="hastagify_embed" data-hashtag="hashtags" data-width="600" data-mode="basic">
          <div>hashtags data by <a href="http://hashtagify.me/">hashtagify.me</a>
          </div></div><script src="//hashtagify.me/assets/hashtagify/embed.js" type="text/javascript"></script>
        <TourFooter />
      </main>
    </div>
  );
};

Insights.propTypes = {
  children: PropTypes.node
};

export default Insights;
