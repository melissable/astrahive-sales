import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Sidebar, Topbar, TourFooter } from '../components';
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
import '../assets/scss/hex.css';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  }
}));

const HexagonGrid = props => {
  const classes = useStyles();
  const { children } = props;
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
      <main className={classes.content, 'hex'}>
        <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
          {/* Grid with manually inserted hexagons */}
          <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
            <Hexagon q={0} r={0} s={0} />
            {/* Using pattern (defined below) to fill the hexagon */}
            <Hexagon q={0} r={-1} s={1} fill="pat-1" />
            <Hexagon q={0} r={1} s={-1} />
            <Hexagon q={1} r={-1} s={0}>
              {/* <Text>1, -1, 0</Text> */}
            </Hexagon>
            <Hexagon q={1} r={0} s={-1}>
              {/* <Text>1, 0, -1</Text> */}
            </Hexagon>
            {/* Pattern and text */}
            <Hexagon q={-1} r={1} s={0} fill="pat-2">
              {/* <Text>-1, 1, 0</Text> */}
            </Hexagon>
            <Hexagon q={-1} r={0} s={1} />
            <Hexagon q={-2} r={0} s={1} />
            {/* <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} /> */}
          </Layout>
          <Pattern id="pat-1" link="http://cat-picture/" />
          <Pattern id="pat-2" link="http://cat-picture2" />
        </HexGrid>
        <TourFooter />
      </main>
    </div>
  );
};

HexagonGrid.propTypes = {
  children: PropTypes.node
};

export default HexagonGrid;
