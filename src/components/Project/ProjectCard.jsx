import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import styles from "./Project.module.css";
import { motion } from "framer-motion";



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
        height: 250,
        [theme.breakpoints.down('md')]: {
            height: "100%",
        },
        [theme.breakpoints.down('sm')]: {
            height: "100%",
        },
        [theme.breakpoints.down('xs')]: {
            height: "100%",
            marginTop:"3%"
        },
    },
}));

export default function ProjectCard({items,i}) {
  const classes = useStyles();
  const fadeLeft = {
      hidden: { opacity: 0, x: -150, y:-150 },
      visible:{opacity:1,x:0,y:0}
    }
    
     const fadeRight = {
    hidden: { opacity: 0, x: 150,y:-150 },
    visible:{opacity:1,x:0,y:0}
     }
    return (
        <>
            <motion.div
             variants={i%2===0?fadeLeft:fadeRight}
             initial="hidden"
             animate="visible"
             transition={{ duration: 1.2 }}
             
            >
                    <Card className={classes.root}>
                        <CardActionArea>
                           <img className={styles.imageCard} src={items.image[0]} alt="icon"/>
                        </CardActionArea>
                </Card>
            </motion.div>
      </>
  );
}