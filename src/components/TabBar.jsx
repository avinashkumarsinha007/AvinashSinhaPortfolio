import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { Home } from "./Home";
import { About } from './About/About';
import { Contact } from './contact';
import { Blog } from './Blogs';
import { Project } from './Project';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    },
    menuButton: {
        marginRight: theme.spacing(0),
    },
}));

export function TabBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   
  return (
    <div className={classes.root}>
      <TabContext value={value} style={{color:"white"}}>
        <AppBar position="static" style={{background:"#1b242f"}}>
          <TabList onChange={handleChange}  style={{color:"white"}}>
            <Tab className={classes.menuButton} style={{ color:value==="1"?"red":"white"}} label="Home" value="1" />
            <Tab style={value==="2"?{ color:"pink"}:null} label="About" value="2" />
            <Tab style={value==="3"?{ color:"blue"}:null} label="Project" value="3" />
            <Tab style={value==="4"?{ color:"orange"}:null} label="Blog" value="4" />
            <Tab style={value==="5"?{ color:"yellow"}:null} label="Contact" value="5" />          
            {/* <Tab style={value==="6"?{ color:"Green"}:null} label="Git graph" value="6" />           */}
          </TabList>
        </AppBar>
        
        <TabPanel style={{ padding: 0 }} value="1"><Home handleChange={handleChange}/></TabPanel>
        <TabPanel style={{padding:0}} value="2"><About/></TabPanel>
        <TabPanel style={{padding:0}} value="3"><Project/></TabPanel>
        <TabPanel style={{padding:0}} value="4"><Blog/></TabPanel>
        <TabPanel style={{ padding: 0 }} value="5"><Contact/></TabPanel>
        {/* <TabPanel style={{ padding: 0 }} value="6">GIT</TabPanel> */}
         
      </TabContext>
    </div>
  );
}