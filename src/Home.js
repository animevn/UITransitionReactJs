import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import "./Home.css"

function Home() {
  const history = useHistory();
  const [show, setShow] = useState(true);

  function onClick(event) {
    event.preventDefault();
    setShow(false);
    history.push("/come");
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
    <div className="container mt-3 col-xl-5 col-lg-6 col-md-8 col-sm-11 col-11">
      <CSSTransition
        in={show}
        classNames="home"
        appear
        timeout={300}
      >
        {content}
      </CSSTransition>
    </div>
  )
}

export default Home;