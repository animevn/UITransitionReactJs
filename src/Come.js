import React from "react";
import {useHistory} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import "./Come.css"

function Come() {

  const history = useHistory();

  function onComeback(event) {
    event.preventDefault();
    history.push("/");
  }

  const content = (
    <div className="card shadow-lg">
      <div className="card-header pb-0">
        <p className="text-success">Welcome here</p>
      </div>

      <div className="card-body">
        <div className="text-center">
          <img className="w-50" src="/images/profile.png" alt="img"/>
        </div>

        <p className="text-center text-success mt-5">Good bye</p>
        <div className="text-center my-3">
          <button className="btn btn-outline-success" onClick={onComeback}>
            Come back
          </button>
        </div>
      </div>

      <div className="card-footer pb-0">
        <p className="text-success text-center">Welcome here</p>
      </div>
    </div>
  );

  return (
    <div className="container mt-3 col-xl-5 col-lg-6 col-md-8 col-sm-11 col-11">
      <CSSTransition
        in={true}
        classNames="come"
        timeout={300}
        appear
      >
        {content}
      </CSSTransition>

    </div>
  )
}

export default Come;