import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import styles from "./Project.module.css";


function Nos({item})
{
   
    return (
        <Paper className={styles.paper}>
           
            <img className={styles.crausalImage} src={item} alt="icon"/>
           
        </Paper>
    )
}
export function Crausal({items=""})
{
    const [state, setState] = useState(items);
    React.useEffect(() => {
        setState(items)
    },[items])

    return (
        <Carousel>
          
            {
                state?.image?.map( (item, i) => <Nos key={i*2} item={item} /> )
            }

           
        </Carousel>
    )
}

