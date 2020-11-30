import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NavBar from './NavBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import BarChat from './barChart';
import PieChart from './pieChart';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50
  },
  paper: {
    width: 400,
    margin: '0 auto',
    marginTop: 25,
    textAlign: 'center',
    padding: 15
  },
  input: {
    width: '95%',
    marginBottom: 10
  }
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <BarChat/>
        <PieChart/>



     
        {/* 
         Material ui Part
              <NavBar />
        <Paper elevation={3} className={classes.paper}>
          <h1>Login</h1>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField label="Enter Email" className={classes.input} />
            <TextField label="Enter Password" className={classes.input} />
            <Button variant="contained" color="primary" className={classes.input}>
              Login
            </Button>
            <CircularProgress value={50} />;
        </form>
        </Paper> */}
      </div>
    </>
  );
}

export default App;
