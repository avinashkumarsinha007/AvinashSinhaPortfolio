import React from "react";

import styled from "styled-components";

import { motion } from "framer-motion";
import { Ball } from "./smallcomponents/ball";
import { Ball1 } from "./smallcomponents/ball1";
import { Ball3 } from "./smallcomponents/Ball3";
import { Ball2 } from "./smallcomponents/ball2";
import { Ball4 } from "./smallcomponents/ball4";
import resume from "../file/Avinash_Kumar_Sinha.pdf";
import GetAppIcon from '@material-ui/icons/GetApp';



const Container = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
// width:100vw;
height:97vh;
padding:3rem calc((100vw-1300px)/2);
@media screen and (max-width:768px){
    grid-template-columns: 1fr;
    
}
`;
const Section = styled.section`
height:97vh;
display:flex;
justify-content:center;
align-item:center;
background:#131313;
@media screen and (max-width:768px){
  height: 140vh;
}
`;


const ColumnLeft = styled.div`
display:flex;
color:#fff;
flex-direction:column;
justify-content:center;
align-items:flex-start;
padding: 5rem 2rem;
h1{
    margin-bottom:0.5rem;
}
p{
    margin:2rem 0;
    font-size:3rem;
    line-height:1.1;
}
`
export const Button = styled(motion.button)`
padding:1rem 3rem;
font-size:1rem;
border :2px solid #fff;
background:transparent ;
border-radius:4px;
outline:none;
cursor:pointer;
color:#fff;
`
export const Button1 = styled(motion.button)`
padding:.8rem 2rem;
font-size:1rem;
padding-bottom:1rem;
border :2px solid pink;
background:transparent ;
border-radius:4px;
outline:none;
cursor:pointer;
color:pink;
`

const Div = styled(motion.div)`
position:absolute;
max-width:250px;
max-height:250px;
`
const ColumnRight = styled.div`
display:flex;
justify-content:center;
align-item:center;
padding:2rem;
position:relative;
${Div}:nth-child(1){
    top:30px;
    left:10px
}
${Div}:nth-child(2){
    top:280px;
    right:100px
}${Div}:nth-child(3){
    top:340px;
    left:90px
}${Div}:nth-child(4){
    top:100px;
    right:250px
}
${Div}:nth-child(5){
  bottom:27px;
  right:300px
}
@media screen and (max-width:768px){
  ${Div}:nth-child(5){
    bottom:-280px;
    right:300px
  }
  padding-left:2rem;
}
`
const bounceTransition = {
  y: {
    duration: 1,
    yoyo: Infinity,
    ease: "easeOut",
  },
  x: {
    duration: 0.9,
    yoyo: Infinity,
    ease: "easeOut",
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    repeatDelay:0.8
  }
}
const bounceTransition1 = {
  
  x: {
    duration: 0.9,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay:0.8
  },
  y: {
    duration: 1,
    yoyo: Infinity,
    ease: "easeOut",
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    repeatDelay:0.8
  }
}


export const Home = ({handleChange}) => {

    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible:{opacity:1,x:0}
  }
  
    return (
      <>
        <Section >
          <Container>
            <ColumnLeft>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{duration:1}}
                        >Welcome! I am <span style={{color:"hotpink",fontSize:27}}>Avinash Kumar Sinha</span><br/> </motion.h1>
                        <motion.p
                            variants={fadeLeft}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1 }}
                            drag={true}
                            dragConstraints={{ left: 0, right: 50, top: 0, bottom: 50 }}
                            
                        >I am a Full-stack web developer</motion.p>
                        <img src="" alt="" />
                        <Button
                        whileHover ={{scale:1.05,color:"hotpink"}}
                        whileTap={{scale:0.95,backgroundColor:"#67F6E7",border:"none",color:"#000"}}
                        initial={{opacity:0}}
                        animate={{ opacity: 1, transition: { duration: 1.8 } }}
                        onClick={()=>handleChange("e","2")}
                        >
                            Tap to start
                       </Button>
                       <a style={{textDecoration:"none"}}  href={resume} download rel="noreferrer" >                   

                   <Button1
                    whileHover ={{scale:1.05,color:"green"}}
                    whileTap={{scale:0.95,backgroundColor:"#67F6E7",border:"none",color:"#000"}}
                    initial={{opacity:0}}
                    animate={{ opacity: 1, transition: { duration: 1.8 } }}
                  
                  style={{ marginTop: "20px" }}>
                            Resume
                            <GetAppIcon style={{fontSize:20,marginLeft:10}}/>
                       </Button1>
                        </a>
            </ColumnLeft>
            <ColumnRight>
                        <Div
                            whileTap={{ scale: 0.85 }}
                          
                            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                          
                             transition={bounceTransition}
                             animate={{
                               y: ["80%", "-40%"],
                               x:["40%","-30%"],
                              
                            }}
                        >
                <Ball />
              </Div>
                        <Div
                        whileTap={{ scale: 0.85 }}
                          
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                      
                         transition={bounceTransition}
                         animate={{
                           y: ["80%", "-40%"],
                           x:["40%","-30%"],
                          
                        }}
                        >
                <Ball1 />
              </Div>
                        <Div
                        whileTap={{ scale: 0.8 }}
                       
                        dragConstraints={{ left: 0, right: 220, top: 50, bottom: 0 }}
                        
                        transition={bounceTransition1}
                        animate={{
                        x:["40%","-30%"],
                          
                          y: ["80%", "-80%"],
                        
                       }}
                        >
                <Ball3 />
              </Div>
               <Div
                         whileTap={{ scale: 0.8 }}
                       
                         dragConstraints={{ left: 0, right: 220, top: 50, bottom: 0 }}
                         
                         transition={bounceTransition1}
                         animate={{
                         x:["40%","-30%"],
                           
                           y: ["80%", "-80%"],
                         
                        }}
                        >
                <Ball2 />
              </Div>
              <Div
                        whileTap={{ scale: 0.5 }}
                        drag={true}
                        dragConstraints={{ left: 100, right: 200, top: 0, bottom: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{opacity:1,y:0,transition:{duration:1}}}
                        >
                <Ball4/>
              </Div>
            </ColumnRight>
          </Container>
        </Section>
      </>
    );
}