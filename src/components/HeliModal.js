/* eslint-disable */

import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import HeliCard from './HeliCard';
import HeliDetails from './HeliDetails';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const helicopter = props.helicopter

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <HeliCard
        helicopter={helicopter}
        handleClickOpen={handleClickOpen}
      />
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers >
            <div className='w-full h-full !mx-auto md:h-60 rounded-2xl flex overflow-y-hidden' style={{
              backgroundImage: `url(${helicopter.image})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              borderRadius: 10,
            }}>
          </div>
        </DialogContent>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          className="text-center"
        >
          {helicopter.name}
        </BootstrapDialogTitle>
        <DialogContent dividers >
          <Typography gutterBottom className='text-center'>
            {helicopter.description}
          </Typography>
          <HeliDetails helicopter={helicopter} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}