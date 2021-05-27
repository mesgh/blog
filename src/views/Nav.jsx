import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Nav({ title }) {
  function Section({ title }) {
    if (title) {
      return (
        <span className="ml-2">&gt;&gt; {title}</span>
      );
    }
    return (title);
  }

  return (
    <nav className="bg-gray-800 flex justify-between px-6 xl:px-16 py-2">
      <span className="text-white">
        <Link to="/">
          <button className="leading-10 trnstn focus:outline-none hover:text-green-400 ">
            Posts
          </button>
        </Link>
        <Section title={title} />
      </span>
    </nav>
  );
}

Nav.propTypes = {
  title: PropTypes.string.isRequired
}

export default Nav;
