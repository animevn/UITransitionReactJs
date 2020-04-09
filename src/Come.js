import React from "react";
import {useHistory} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import "./Come.css"
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const width = {xs:11, sm:9, md:5, lg:4, xl:3};
const useStyles = makeStyles(()=>(
  {
    img: {
      overflow: 'hidden',
      width: "auto",
      maxHeight: "30vh",
      objectFit: "cover"
    },
    box: {
      overflow: 'hidden',
    }
  })
);

function Come() {
  const classes = useStyles();
  const history = useHistory();

  function onComeback(event) {
    event.preventDefault();
    history.push("/");
  }

  const content = (
    <Box m={5} borderRadius={10} boxShadow={3} bgcolor="white" className={classes.box}>
      <Typography component="div" variant="h4">
        <Box textAlign="center" p={2} bgcolor="aliceblue">
          Welcome here
        </Box>
      </Typography>
      <Divider/>

      <Box display="flex" justifyContent="center" mt={2}>
        <img className={classes.img} src="/images/image.png" alt="img"/>
      </Box>

      <Typography component="div" variant="h5">
        <Box display="flex" justifyContent="center" mt={2}>
          Ciao Bonjour
        </Box>
      </Typography>

      <Box display="flex" justifyContent="center" mt={2} mb={5}>
        <Button variant="contained" color="secondary" onClick={onComeback}>
          Comeback
        </Button>
      </Box>

      <Divider/>
      <Typography component="div" variant="h4">
        <Box textAlign="center" p={2} bgcolor="aliceblue">
          Welcome here
        </Box>
      </Typography>

    </Box>
  );

  return (
    <Grid container direction="row" justify="center">
      <Grid item {...width}>
        <CSSTransition
          in={true}
          classNames="come"
          timeout={300}
          appear
        >
          {content}
        </CSSTransition>
      </Grid>
    </Grid>
  )
}

export default Come;