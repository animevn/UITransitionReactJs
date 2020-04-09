import React from "react";
import {useHistory} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "./Home.css"

const width = {xs:10, sm:8, md:6, lg:5, xl:4};

function Home() {
  const history = useHistory();

  function onClick(event) {
    event.preventDefault();
    history.push("/come")
  }

  const content = (
    <div className="card shadow-lg">
      <div className="card-header pb-0">
        <p className="text-success">Hello</p>
      </div>

      <div className="card-body">
        <img className="w-100" src="/images/image.png" alt="img"/>
        <p className="text-center text-success">Ciao Bonjour</p>

        <div className="text-center my-3">
          <button className="btn btn-outline-success" onClick={onClick}>
            Click Me
          </button>
        </div>
      </div>

      <div className="card-footer pb-0">
        <p className="text-success text-center">Hello</p>
      </div>
    </div>
  );

  return (
    <Grid container direction="row" justify="center">
      <Grid item {...width}>
        <CSSTransition
          in={true}
          classNames="home"
          timeout={300}
          appear
        >
          {content}
        </CSSTransition>
      </Grid>
    </Grid>
  )
}

export default Home;