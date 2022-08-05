import React from 'react'
import {Link} from "react-router-dom";

const Home = (props) => {
  return (
    <>
    <h1 className={`text-center text-${props.theme==='light'?'dark':'light'}`}>Flipper</h1>
    <center>
    <div>
  <h3 className={`text-${props.theme==='light'?'dark':'light'}`} data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Instructions <i className="bi bi-caret-down-fill"></i>
  </h3>
</div>
<div className="collapse" id="collapseExample">
  <div className={`card card-body ${props.theme === "light" ? "" : "bg-dark text-light border"}`}>
  Select two cards until all the pairs have been revealed. Do this in least possible time and moves.
  </div>
</div>
</center>
<h3 className={`text-center mt-4 text-${props.theme === "light" ? "dark" : "light"}`}>Choose from the difficulty below to play.</h3>
    <div className="d-flex justify-content-center my-4">
        <Link to="/play/easy" className={`btn btn-${props.theme === "light" ? "dark" : "light"} mx-2`}>Easy</Link>
        <Link to="/play/medium" className={`btn btn-${props.theme === "light" ? "dark" : "light"} mx-2`}>Medium</Link>
        <Link to="/play/hard" className={`btn btn-${props.theme === "light" ? "dark" : "light"} mx-2`}>Hard</Link>
    </div>
    </>
  )
}

export default Home