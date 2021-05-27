import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Loader from "../components/loader";

function List(props) {
  props.changeTitle("");

  if (props.posts.length === 0) {
    return (
      <div className="cont">
        <Loader />
      </div>
    );
  }
  return (
    <div className="cont">
      <div className="flex justify-between my-2">
        <h1 className="text-2xl font-bold">Posts</h1>
        <Link to="/new">
          <button className="btn btn--purple">Add new</button>
        </Link>
      </div>
      <ul className="w-full">
        {props.posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
}

List.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  changeTitle: PropTypes.func.isRequired,
};

export default List;
