import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import styles from "./Blog.module.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 850,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 4, 3),
    top: "14%",
    left: "18%",
    [theme.breakpoints.down('md')]: {
            width: 650,
            top:"30%"
          },
    [theme.breakpoints.down('sm')]: {
        width: 550,
        top: "30%",
        left:"14%"
        },
        [theme.breakpoints.down('xs')]: {
            width: 200,
            top: "30%",
            height: "40vh",
            display:"none"
          },
  },
}));

export  function SimpleModal({handleClose,open,data}) {
  const classes = useStyles();
  
//  console.log(data)
  const body = (
    <div  className={classes.paper}>
          <h2 id="simple-modal-title">{data?.title}</h2>
          <img className={styles.image2} src={data?.image} alt=""/>
      <SimpleModal />
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}