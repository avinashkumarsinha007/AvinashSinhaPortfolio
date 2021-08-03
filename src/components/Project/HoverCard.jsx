import React from "react";
import Button from '@material-ui/core/Button';
import styles from "./Project.module.css";
import { motion } from "framer-motion";


export const HoverCard = ({ items, handleHoverClose, handleOpen }) => {
    const fadeTop = {
        hidden: { opacity: 0, y: -50 },
        visible:{opacity:1,y:0}
    }
    const fadeBottom = {
        hidden: { opacity: 0, y: 50 },
        visible:{opacity:1,y:0}
    }
    return (
        <>
            <div onMouseLeave={handleHoverClose} className={styles.hcontainer} >
                <div className={styles.hcontainer1}>
                    <motion.div
                     variants={fadeTop}
                     initial="hidden"
                     animate="visible"
                     transition={{ duration: 0.5 }}
                    >
                        <h4 className={styles.hcontainerh}>{items.title}</h4>
                        <p className={styles.pTag}>{items.language}</p>
                    </motion.div>
                    <motion.div
                     variants={fadeBottom}
                     initial="hidden"
                     animate="visible"
                     transition={{ duration: 0.5 }}
                    >
                    <Button className={styles.buttonh} variant="contained" color="secondary" onClick={()=>handleOpen(items)}  >Learn more</Button>
                    </motion.div>
                </div>
            </div>
        </>
    )
}