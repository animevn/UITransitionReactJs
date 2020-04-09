import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import Home from "./Home";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {BrowserRouter, Route} from "react-router-dom";
import Come from "./Come";

function App() {
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between" minHeight="100vh">
      <Grid>
        <Header/>
        {/*app body goes down here*/}
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/come" component={Come} />
        </BrowserRouter>
        {/*app body goes up here hahaha */}
      </Grid>
      <Footer/>
    </Box>
  );
}

export default App;
