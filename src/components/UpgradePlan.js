import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography, Button, colors, Modal, Icon, Fab, Grid } from '@material-ui/core';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const url = "https://txable.us5.list-manage.com/subscribe/post?u=71ce0640ca8695b91810cc50a&amp;id=fb306ed87f";

const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
    <div className="subscribe-input">
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}      
      <input
        className="email-input"
        ref={node => (name = node)}
        type="text"
        placeholder="Your name"
      />
      <input
        className="email-input"
        type="text"
        placeholder="Your email"        
        ref={node => (email = node)}
      />
      <Fab
        variant="extended"
        size="large"
        color="secondary"
        aria-label="Subscribe"
        className="btn-action m-8"
        onClick={submit}
      >
        <Icon className="mr-16">mail</Icon>
        Subscribe
      </Fab>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: colors.grey[50]
  },
  media: {
    paddingTop: theme.spacing(2),
    height: 80,
    textAlign: 'center',
    '& > img': {
      height: '100%',
      width: 'auto'
    }
  },
  content: {
    padding: theme.spacing(1, 2)
  },
  actions: {
    padding: theme.spacing(1, 2),
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 4, 3),
  },
}));

const UpgradePlan = props => {
  const { className, ...rest } = props;
  const [modalStyle] = React.useState(getModalStyle);

  const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.media}>
        <img
          alt="Upgrade to PRO"
          src="assets/images/undraw_resume_folder_2_arse.svg"
        />
      </div>
      <div className={classes.content}>
        <Typography
          align="center"
          gutterBottom
          variant="h6"
        >
          Become a user
        </Typography>
        <Typography
          align="center"
          variant="body2"
        >
          Sign up for the beta test and be one of the first users to experience AstraHive
        </Typography>
      </div>
      <div className={classes.actions}>
        <Button
          color="primary"
          onClick={handleOpen}
          variant="contained"
        >
          Join Beta Program
        </Button>
      </div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Grid container spacing={4} justify="center" >
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={formData => subscribe(formData)}
                />
              )}
            /> 
          </Grid> 
        </div>
      </Modal>
    </div>
  );
};

UpgradePlan.propTypes = {
  className: PropTypes.string
};

export default UpgradePlan;