import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { UsersToolbar, UsersTable, Sidebar, Topbar, TourFooter } from '../components';
import { userList as mockData } from '../utils/data';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 50,
    padding: theme.spacing(3)
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

const UserList = props => {
  const { children } = props;
  const classes = useStyles();

  const [users] = useState(mockData);
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
        <UsersToolbar />
        <UsersTable users={users} />
        <TourFooter />
      </main>
    </div>
  );
};

UserList.propTypes = {
  children: PropTypes.node
};

export default UserList;