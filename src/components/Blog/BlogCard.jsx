import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import  Grid  from '@material-ui/core/Grid';
import { motion } from "framer-motion";



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: "100%",
    height: "100%"

  },
  media: {
    height: 280,
    backgroundRepeat:"no-repeat",
    backgroundSize: "100% 100%",
  },
  button: {
   height:"18vh"
  }
});

export  function BlogCard({items,handleOpen,i}) {
  const classes = useStyles();
  const fadeLeft = {
    hidden: { opacity: 0, x: -150 },
    visible:{opacity:1,x:0,y:0}
  }
  
   const fadeRight = {
  hidden: { opacity: 0, x: 150 },
  visible:{opacity:1,x:0,y:0}
   }
  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <motion.div
      variants={i%2===0?fadeLeft:fadeRight}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.2 }}     
      >
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={items.image}
            title="Contemplative Reptile"
            onClick={()=>handleOpen(items.id)}
        />
        <CardContent className={classes.button}>
          <Typography gutterBottom variant="h5" component="h2">
            {items.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {items.para}
          </Typography>
        </CardContent>
      </CardActionArea>
        <CardActions >
          <a style={{textDecoration:"none"}}  href={items.link} rel="noreferrer" target={"_blank"}>
           <Button  size="small" variant="contained" color="secondary">
            Read More
            </Button>
          </a>
          <span style={{marginLeft:"38%"}}>{items.date}</span>
      </CardActions>
      </Card>
      </motion.div>
      </Grid>
  );
}