import React from "react";
import { ProjectOriginal } from "./ProjectOriginal";
import { Ending } from "./SimpleModal";
import naukri1 from "../image/naukari.PNG"
import rodan1 from "../image/rodan.PNG"
import pepperfry from "../image/p3/LandingPage.png"

import pcheckout from "../image/p3/CheckOut.png"
import pcart from "../image/p3/Cart.png"
import pregister from "../image/p3/Register.png";
import razorPay from "../image/p3/RazorPayPatment.png"
import pSingleCategory from "../image/p3/SingleCategory.png"
import psingleProduct from "../image/p3/SingleProductPage.png"
import pWishlist from "../image/p3/WishList.png"
import styles from "./Project.module.css";
//
import blogR from "../image/p1/BlogR.PNG";
import crausalR from "../image/p1/crausalR.PNG"
import FooterR from "../image/p1/FooterR.PNG"
import LandingPageR from "../image/p1/LandingPageR.PNG";
//
import filterN from "../image/p2/filterN.PNG";
import loginN from "../image/p2/loginN.PNG";
import profileN from "../image/p2/profileN.PNG";
import recruiterN from "../image/p2/recruiterN.PNG";
import registerN from "../image/p2/rigisterN.PNG"
import jobdesN from "../image/p2/JobDesN.PNG"
//

import filterR from "../image/p4/filterR.PNG";
import landingR from "../image/p4/LandingR.PNG";
import landing2R from "../image/p4/Landing2R.PNG";
import paymentR from "../image/p4/PaymentR.PNG";
import paymentsR from "../image/p4/paymentsR.PNG";
import ProductR from "../image/p4/ProductR.PNG";
import ProfileR from "../image/p4/ProfileR.PNG";



import { Grid } from "@material-ui/core";

export const Project = () => {
    const item = [
        {
            image: [
                landingR,landing2R,filterR,ProductR,paymentR,paymentsR,ProfileR
            ],
            id: 1,
            title:"Revv Car Rental",
            link: "",
            gitLink: "https://github.com/avinashkumarsinha007/revv_clone",
            language:"MERN"
        },
        {
            image: [
                pepperfry,pregister,pSingleCategory,psingleProduct,pcart,pWishlist,pcheckout,razorPay
            ],
            id: 2,
            title:"Pepperfry furnitures selling",
            link: "https://pepperfry.netlify.app/",
            gitLink: "https://github.com/Vinesh3124/pepperfry_clone",
            language:"MERN"
        },
        {
            image: [
                naukri1,filterN,jobdesN,loginN,registerN,profileN,recruiterN
            ],
            id: 3,
            title:"Naukri Job Portal",
            link: "http://intense-taiga-94146.herokuapp.com/",
            gitLink: "https://github.com/TusharTaral/naukri-clone",
            language:"React/Redux"
        },
        {
            image: [
                LandingPageR ,rodan1,crausalR,blogR,FooterR
            ],
            id: 4,
            title:"Rodan + Fields",
            link: "",
            gitLink: "https://github.com/kapsxx/unit-2-project",
            language:"JavaScript"
        }
    ]

    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState("");

    const handleOpen = (items) => {
          setOpen(true);
        //   item.map(el => el.id === id ? setData(el) : null);
        setData(items)
        };

    const handleClose = () => {
        setOpen(false);
        };
    
   
    // console.log(hover)
    return (
        <>
            <div className={styles.container}>
             <Ending handleClose={handleClose} open={open} data={data}/>
                <div className={styles.container2}>
                    <Grid container spacing={1}>
                    {item.map((el,i) => {
                        return (
                          <ProjectOriginal
                            key={el.id}
                            items={el}
                            handleOpen={handleOpen}
                            i={i}
                          />
                        );
                    })}
                    </Grid>
                </div>
            </div>
        </>
    )
}