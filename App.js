import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonAppBar from './NavBar';
import BarChart from './BarChart';
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: 'lightblue',
    // '& > *': {
    //   margin: theme.spacing(1),
    //   width: theme.spacing(16),
    //   // height: theme.spacing(16),
    // },
  },
  paper: {
    width: 400,
    margin: '0 auto',
    marginTop:50,
    textAlign: 'center',
    // padding:15,
  },
  input:{
    width:'95%',
  }
}));



function App() {
  const classes = useStyles();
  return (
    <div>
      {/* <ButtonAppBar/>
      <Paper elevation={3} className={classes.paper}>
        <h1>Login</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Enter Email" className={classes.input}/>
          <TextField label="Enter Password" className={classes.input} />
          <Button variant="contained" color="primary" className={classes.input}>
            LogIn
                  </Button>
        </form>
      // </Paper> */}
      <BarChart/>
    </div>
  )
}

export default App;
