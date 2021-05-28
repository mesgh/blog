import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NotFound(props) {
  props.changeTitle("NotFound");
  return (
    <div className="cont text-red-300">
      <h1 className="text-6xl">404</h1>
      Return to 
      <Link to="/">
          <span className="inline-block mx-1 leading-10 trnstn text-green-400 focus:outline-none hover:text-green-800 ">
             Posts 
          </span>
        </Link>
        page and try again.
    </div>
  );
}

NotFound.propTypes = {
  changeTitle: PropTypes.func.isRequired,
};

export default NotFound;
