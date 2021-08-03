import React from "react";
import naukri from "../image/naukari.PNG";
import nifty from "../image/nifty.PNG";
import rodan from "../image/rodan.PNG";
import { BlogCard } from "./BlogCard";
import Grid from '@material-ui/core/Grid';
import styles from "./Blog.module.css";
import { SimpleModal } from "./Modal";

export const Blog = () => {
    const item = [
        {
            image: naukri,
            para: "It is a website where we can search and apply for jobs available in India. My personal experience of using React...",
            title: "Cloning a Job Portal",
            date: "April 21, 2021",
            link: "https://avinashkumarsinha007.medium.com/clone-of-naukari-com-894a1b8fa092",
            id:1
        },
        {
            image: rodan,
            para: "The term cloning means replicating the original web-site into a dummy or a project website and dynamic programing used... ",
            title: "Clone a Dynamic Web Page for Beginners.",
            date: "15 Mar, 2021",
            link: "https://avinashkumarsinha007.medium.com/clone-dynamic-web-page-for-beginners-8d2c27294e28",
            id:2
        },
        {
            image: nifty,
            para: "Nifty.com is a Project management website that manages your workflow, Documents, Communication when you are working on a...",
            title: "Our Ist Website Nifty.com at Masai",
            date: "Feb 8, 2021",
            link: "https://avinashkumarsinha007.medium.com/our-ist-website-nifty-com-at-masai-25bfcb1b06ed",
            id:3
        }
    ]
 const [open, setOpen] = React.useState(false);
 const [data, setData] = React.useState("");

  const handleOpen = (id) => {
      setOpen(true);
      item.map(el => el.id === id ? setData(el) : null);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
        <>
            <div className={styles.outer}>
                <SimpleModal handleClose={handleClose} open={open} data={ data}/>
            <div className={styles.container}>
                <Grid container spacing={1}>
                {item.map((el,i) => {
                    return <BlogCard key={el.date} i={i} items={el} handleOpen={handleOpen}/>
                })}
                </Grid>
                </div>
            </div>

        </>
    )
}