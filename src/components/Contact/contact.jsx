import React, { useState } from "react";
import styles from "./contact.module.css";
import { Button } from "../Home";
import emailjs from "emailjs-com";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { motion } from "framer-motion";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CallIcon from '@material-ui/icons/Call';

const inState = {
    name: "",
    email: "",
    message:""
}
const fadeLeft = {
    hidden: { opacity: 0, x: -150 },
    visible:{opacity:1,x:0}
}
const fadeRight = {
    hidden: { opacity: 0, x: 150 },
    visible:{opacity:1,x:0}
}
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
export const Contact = () => {

    const [state, setState] = useState(inState);
    const { email, name, message } = state;
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [alert, setAlert] = useState("");


    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            process.env.REACT_APP_EMAIL_SERVICE,
            process.env.REACT_APP_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_INTEGRATION_ID
          )
            .then((res) => { setAlert(res.status) })
            .catch(err => setAlert(err));
            setState(inState);       
    }

      React.useEffect(() => {
          if (alert === 200)
          {
               setOpen(true)
          }
          else if(alert!=="")
          {
            setOpen1(true)             
          }
       },[alert])
       const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
        setOpen1(false);
    };
    

    return (
        <>
            <div className={styles.container}>
                <div className={styles.container2}>
                   <div>
                       <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{ vertical:"top", horizontal:"center" }} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success">
                                Details submitted successfully!
                           </Alert>
                        </Snackbar>
                        <Snackbar open={open1} autoHideDuration={6000} anchorOrigin={{ vertical:"top", horizontal:"center" }} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="error">
                                something went wrong mail at avinashkumarsinha007@gmail.com
                           </Alert>
                        </Snackbar>
                    </div> 
                    <h3 className={styles.hTag}>Have a question or want to work together?</h3>
                    <div className={styles.form} >
                    <form onSubmit={handleSubmit}>
                            <motion.input
                             variants={fadeLeft}
                             initial="hidden"
                             animate="visible"
                             transition={{ duration: 1 }}
                            className={styles.input} value={name} type="text" placeholder="Name" name="name" onChange={handleChange} /> <br />
                            <motion.input
                                 initial={{ opacity: 0 }}
                                 animate={{ opacity: 1 }}
                                 transition={{duration:1.5}}
                                className={styles.input} value={email} type="email" placeholder="Email" required name="email" onChange={handleChange} /> <br />
                            <motion.textarea
                                 variants={fadeRight}
                                 initial="hidden"
                                 animate="visible"
                                 transition={{ duration: 1 }}
                                placeholder="enter mess..." className={styles.input1} value={message} cols={50} row="10" name="message" required onChange={handleChange} /><br />
                            <Button
                                 whileHover ={{scale:1.05,color:"green"}}
                                 whileTap={{scale:0.95,backgroundColor:"#67F6E7",border:"none",color:"#000"}}
                                 initial={{opacity:0}}
                                 animate={{ opacity: 1, transition: { duration: 1.8 } }}
                                className={styles.button}
                            >
                             Submit   
                        </Button>
                    </form>
                    </div>

                    <div className={styles.contact1}>
                        <a style={{textDecoration:"none"}}  href={"https://www.linkedin.com/in/avinash-kumar-sinha-90413318a"}  rel="noreferrer" target={"_blank"}>                   
                            <LinkedInIcon style={{fontSize:38}} className={styles.contact4} />
                            </a>
                        <a style={{textDecoration:"none"}}  href={"https://github.com/avinashkumarsinha007"}  rel="noreferrer" target={"_blank"}>                       
                            <GitHubIcon style={{fontSize:38}} className={styles.contact2} />
                            </a>
                                             
                            <CallIcon style={{fontSize:38}}  className={styles.contact3} />
                            <span style={{fontSize:18,fontWeight:"bold",marginLeft:-20,marginTop:4}}>
                               - 9990600915
                            </span>
                            
                    </div>
                </div>
            </div>
        </>
    )
}