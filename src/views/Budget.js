import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Button,
  IconButton,
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider,
  Avatar,
  LinearProgress
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

import { SearchInput, Sidebar, Topbar, TourFooter } from '../components';
import { productListData as mockData } from '../utils/data';

const useStylesProductsToolbar = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const ProductsToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStylesProductsToolbar();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button className={classes.importButton}>Import</Button>
        <Button className={classes.exportButton}>Export</Button>
        <Button
          color="primary"
          variant="contained"
        >
          Add product
        </Button>
      </div>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search product"
        />
      </div>
    </div>
  );
};

ProductsToolbar.propTypes = {
  className: PropTypes.string
};





const useStylesProductCard = makeStyles(theme => ({
  root: {},
  imageContainer: {
    height: 64,
    width: 64,
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  }
}));

const ProductCard = props => {
  const { className, product, ...rest } = props;

  const classes = useStylesProductCard();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.imageContainer}>
          <img
            alt="Product"
            className={classes.image}
            src={product.imageUrl}
          />
        </div>
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          {product.title}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {product.description}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Grid
          container
          justify="space-between"
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <AccessTimeIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
              Updated 2hr ago
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <GetAppIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
              {product.totalDownloads} Downloads
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};





const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 50,
    padding: theme.spacing(4),
    marginLeft: theme.spacing(5)
  },
  shiftContent: {
    paddingLeft: 180
  },
  content: {
    marginTop: theme.spacing(5),
    height: '100%',
    marginLeft: theme.spacing(5)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32,
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    fontWeight: 700
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  },
  progress: {
    marginTop: theme.spacing(2),
  }
}));

const Budget = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const [products] = useState(mockData);

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
        <Grid
          container
          spacing={3}
        >
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >              
            <Card
              {...rest}
              className={clsx(classes.root, className)}
            >
              <CardContent>
                <Grid
                  container
                  justify="space-between"
                >
                  <Grid item>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    >
                      Revenue
                    </Typography>
                    <Typography variant="h4">$7900</Typography>
                  </Grid>
                  <Grid item>
                    <Avatar className={classes.avatar}>
                      <InsertChartIcon className={classes.icon} />
                    </Avatar>
                  </Grid>
                </Grid>
                <LinearProgress
                  className={classes.progress}
                  value={65.0}
                  variant="determinate"
                />
              </CardContent>
            </Card>
            </Grid><Grid
              item
              lg={4}
              md={6}
              xs={12}
            >              
            <Card
              {...rest}
              className={clsx(classes.root, className)}
            >
              <CardContent>
                <Grid
                  container
                  justify="space-between"
                >
                  <Grid item>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    >
                      Rent
                    </Typography>
                    <Typography variant="h4">$800</Typography>
                  </Grid>
                  <Grid item>
                    <Avatar className={classes.avatar}>
                      <InsertChartIcon className={classes.icon} />
                    </Avatar>
                  </Grid>
                </Grid>
                <LinearProgress
                  className={classes.progress}
                  value={100.0}
                  variant="determinate"
                />
              </CardContent>
            </Card>
            </Grid><Grid
              item
              lg={4}
              md={6}
              xs={12}
            >              
            <Card
              {...rest}
              className={clsx(classes.root, className)}
            >
              <CardContent>
                <Grid
                  container
                  justify="space-between"
                >
                  <Grid item>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    >
                      New Subscribers
                    </Typography>
                    <Typography variant="h4">44</Typography>
                  </Grid>
                  <Grid item>
                    <Avatar className={classes.avatar}>
                      <InsertChartIcon className={classes.icon} />
                    </Avatar>
                  </Grid>
                </Grid>
                <LinearProgress
                  className={classes.progress}
                  value={65.0}
                  variant="determinate"
                />
              </CardContent>
            </Card>
            </Grid><Grid
              item
              lg={4}
              md={6}
              xs={12}
            >              
            <Card
              {...rest}
              className={clsx(classes.root, className)}
            >
              <CardContent>
                <Grid
                  container
                  justify="space-between"
                >
                  <Grid item>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    >
                      New Subscribers
                    </Typography>
                    <Typography variant="h4">44</Typography>
                  </Grid>
                  <Grid item>
                    <Avatar className={classes.avatar}>
                      <InsertChartIcon className={classes.icon} />
                    </Avatar>
                  </Grid>
                </Grid>
                <LinearProgress
                  className={classes.progress}
                  value={65.0}
                  variant="determinate"
                />
              </CardContent>
            </Card>
            </Grid><Grid
              item
              lg={4}
              md={6}
              xs={12}
            >              
            <Card
              {...rest}
              className={clsx(classes.root, className)}
            >
              <CardContent>
                <Grid
                  container
                  justify="space-between"
                >
                  <Grid item>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    >
                      New Subscribers
                    </Typography>
                    <Typography variant="h4">44</Typography>
                  </Grid>
                  <Grid item>
                    <Avatar className={classes.avatar}>
                      <InsertChartIcon className={classes.icon} />
                    </Avatar>
                  </Grid>
                </Grid>
                <LinearProgress
                  className={classes.progress}
                  value={65.0}
                  variant="determinate"
                />
              </CardContent>
            </Card>
            </Grid><Grid
              item
              lg={4}
              md={6}
              xs={12}
            >              
            <Card
              {...rest}
              className={clsx(classes.root, className)}
            >
              <CardContent>
                <Grid
                  container
                  justify="space-between"
                >
                  <Grid item>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    >
                      New Subscribers
                    </Typography>
                    <Typography variant="h4">44</Typography>
                  </Grid>
                  <Grid item>
                    <Avatar className={classes.avatar}>
                      <InsertChartIcon className={classes.icon} />
                    </Avatar>
                  </Grid>
                </Grid>
                <LinearProgress
                  className={classes.progress}
                  value={65.0}
                  variant="determinate"
                />
              </CardContent>
            </Card>
            </Grid>
        </Grid>
        <TourFooter />
        </main>
    </div>
  );
};

export default Budget;