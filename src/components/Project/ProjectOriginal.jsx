import { Grid } from "@material-ui/core";
import React from "react";
import { HoverCard } from "./HoverCard";
import ProjectCard from "./ProjectCard";
import styles from "./Project.module.css"

export const ProjectOriginal = ({ items,handleOpen,i }) => {
  
    const [hover, setHover] = React.useState(false);
    const handleHoverOpen = () => {
        setHover(true)
    }
    const handleHoverClose = () => {
        setHover(false)
    }
    // console.log(hover)
  
    return (
      <>
           
            <Grid item xs={12} sm={12} md={12} lg={6}>
                
                {hover ? (
                     <span className={styles.containerh} onMouseLeave={handleHoverClose} >
                      <HoverCard  items={items} handleOpen={handleOpen}  />
                     </span>
                 
                ) : ( 
                      
                    <span className={styles.containeri} onMouseEnter={handleHoverOpen}>
                     <ProjectCard i={i} items={items}  />                         
                    </span>
                 )}
            </Grid> 
      </>
    );
}