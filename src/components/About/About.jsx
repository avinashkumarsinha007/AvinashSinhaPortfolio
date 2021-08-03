import React from "react";
import ParticlesBg from 'particles-bg'
import MouseParticles from 'react-mouse-particles'
import styles from "./about.module.css"
import Grid from '@material-ui/core/Grid';
import me from "../image/me.png.jpg";
import { motion } from "framer-motion";

export const About = () => {
   
    const fadeLeft = {
        hidden: { opacity: 0, x: -150 },
        visible:{opacity:1,x:0}
    }
    const fadeTop = {
        hidden: { opacity: 0, y: -50 },
        visible:{opacity:1,y:0}
    }
    const fadeRight = {
        hidden: { opacity: 0, x: 150 },
        visible:{opacity:1,x:0}
    }
    return (       
        <>
            
            <ParticlesBg  type="circle" bg={{
                            position: "absolute",
                            zIndex: -0.8,
                            height:"98%",
                            background:"#000",
                            top: 48,
                            left: 0,
                            }}
            />
            <MouseParticles g={1} color="random" cull="col,image-wrapper" />
            <div style={{
                // position: "absolute",
                zIndex: -0.8,
                // top: "15%",
                // left:"20%"
                display: "flex",
                width: "70%",
                margin:"auto"
            }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1 }}
                            className={styles.container1}>
                <div>
                    <motion.img whileTap={{ scale: 1.30 }} className={styles.image} src="https://png.pngitem.com/pimgs/s/79-794163_check-internet-availability-sign-up-fast-speedometer-clipart.png" alt="icon" />
                    <div  className={styles.container4}>
                            <p style={{fontSize:20,fontWeight:"bold"}}>Fast</p>
                            <p >Fast load times and lag free interaction.</p>
                    </div>
                </div>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                         <motion.div 
                            variants={fadeTop}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1 }}
                            
                            className={styles.container2}>
                <div>
                     <motion.img whileTap={{ scale: 1.30 }} className={styles.image} src="https://www.webdesigndiscovery.com/wp-content/uploads/2019/07/Responsive_Website_Design.jpg" alt="icon"/>
                     <div className={styles.container4}>
                            <p style={{fontSize:20,fontWeight:"bold"}}>Responsive</p>
                            <p>My layouts will work on any device, big or small.</p>
                    </div>
                </div>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <motion.div
                         variants={fadeRight}
                         initial="hidden"
                         animate="visible"
                         transition={{ duration: 1 }}                       
                        >
                <div className={styles.container3}>
                     <motion.img whileTap={{ scale: 1.30 }} className={styles.image} src="https://logicwebmedia.s3.amazonaws.com/wp-content/uploads/20170328153215/website-speed-ranking-factors-graphic.jpg" alt="icon"/>
                        <div className={styles.container4}>
                                <p style={{fontSize:20,fontWeight:"bold"}}>Dynamic</p>
                                <p >Websites don't have to be static, I love making pages come to life.</p>
                        </div>
                    </div>
                        </motion.div>
                        </Grid>
                </Grid>
            </div>
            <div style={{width:"90%"}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={6} >
                        <motion.div
                             initial={{ opacity: 0 }}
                             animate={{ opacity: 1 }}
                             transition={{duration:1}}
                            className={styles.container5} >
                            <motion.img whileTap={{ scale: 1.30 }} className={styles.hexagon} src={me} alt="myImage" />
                            <p className={styles.para} >I'm a Full-Stack Developer, from Ghaziabad India.<br/>
                             I have serious passion for web development, animations and creating intuitive, dynamic user experiences.
                             I like to work on new projects so, <span style={{color:"pink"}}>Let's make something special.</span></p>
                    </motion.div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                        <motion.div
                            variants={fadeRight}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1 }}
                            
                            className={styles.container6}>
                            <div>
                               <h1>Tech Stacks I Use</h1>
                            </div>
                            
                            <div  style={{display:"flex"}}>
                                <motion.img whileTap={{ scale: 1.30 }} className={styles.image2} src= 'data:image/png;base64,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' alt="mongodb"/>
                                <span className={styles.span1}>MongoDb</span>
                                <motion.img whileTap={{ scale: 1.30 }} style={{marginLeft:"20%"}} className={styles.imageM} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxyftUbBjONEO7UzBeTPNKVwt39HNUOzpPPTlPTKZohZCHVGfW8qKN4O6unkmalUnTTfE&usqp=CAU" alt="javascript"/>
                                <span className={styles.span10}>Javascript</span>
                            </div>
                            <div style={{display:"flex",marginTop:10}}>
                                <motion.img whileTap={{ scale: 1.30 }} className={styles.image2} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3nGP9w-Ol7H0GYUnDUdCwqnoLwRzoe_cmA&usqp=CAU" alt="express"/>
                                <span className={styles.span1}>Express</span>
                                <motion.img whileTap={{ scale: 1.30 }} style={{marginLeft:"25%"}}  className={styles.imageM} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJKHkHKGxbhMX5Rx_5msdStg9dfCk8MCeEKkfUf8xnDHOn1IPa4Kb52L9ltZ6TIkx1wE&usqp=CAU" alt="CSS"/>
                                <span className={styles.span10}>CSS</span>
                            </div>
                            <div style={{display:"flex",marginTop:10}}>
                                <motion.img whileTap={{ scale: 1.30 }} className={styles.image2} src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?fit=260%2C260&ssl=1" alt="react" />
                                <span className={styles.span1}>React </span>
                            </div>
                            <div style={{display:"flex",marginTop:10}}>
                                 <motion.img whileTap={{ scale: 1.30 }} className={styles.image2} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5cE0xykRiqRzNhC18-PdSKu4SpFaD2gxOb3jxnilhS_JDnlqng0_9dI9En-HnhqPf0IE&usqp=CAU" alt="Node"/>                               
                                 <span className={styles.span1}>Node </span>
                            </div>
                            <div style={{display:"flex",marginTop:10}}>
                                 <motion.img whileTap={{ scale: 1.30 }} className={styles.image2} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWqOwQ9VuvUORNxqOzdF29DS1ktTCiQwFEy6rP0nKAyln4BmyKg5OIuuIiUbA_jFF8evc&usqp=CAU" alt="HTML"/>                               
                                 <span className={styles.span1}>HTML </span>
                            </div>
                           
                    </motion.div>
                </Grid>
            </Grid>
            </div>
    </>
    );
  }



