import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
// import styles from "./Project.module.css"
import CloseIcon from '@material-ui/icons/Close';
import { Crausal } from './Crausal';
import { Button } from '@material-ui/core';
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid red',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 4, 3),
    top: "14%",
    left: "22%",
    borderRadius:"5px",
   
    [theme.breakpoints.down('md')]: {
            width: 650,
            top:"20%"
          },
    [theme.breakpoints.down('sm')]: {
        width: 400,
        top: "25%",
        left: "14%",
        },
        [theme.breakpoints.down('xs')]: {
            width: 250,
            top: "30%",
            left:"6%",
            height: "40vh",           
          },
  },
}));

export  function Ending({handleClose,open,data}) {
  const classes = useStyles();
    const [state, setState] = useState(data);
    React.useEffect(() => {
        setState(data)
    },[data])
//  console.log(state?.link)
  const body = (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration:.8}}
          className={classes.paper}>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <h2 style={{marginTop:10}} id="simple-modal-title">{state?.title}</h2>
              <CloseIcon onClick={()=>handleClose()} style={{marginTop:"1.2%" ,fontWeight:"bold",fontSize:30,cursor:"pointer"}}/>
          </div>
          <Crausal items={state} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>

          <a style={{textDecoration:"none"}}  href={state?.link}  rel="noreferrer" target={"_blank"}>
              
          <Button color="secondary" variant="outlined" className="CheckButton">
                check it out
              </Button>
          </a>

          <a style={{textDecoration:"none"}}  href={state?.gitLink}  rel="noreferrer" target={"_blank"}>
              
          <Button color="secondary" variant="outlined" style={{background:"black"}}>
              Github
            </Button>
          </a>
        </div>
      <Ending/>
    </motion.div>
  );
// console.log(open)
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