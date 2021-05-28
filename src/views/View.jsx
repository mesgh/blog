import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Loader from "../components/loader";

function View(props) {
  const [post, setPost] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then((res) => res.json())
      .then(res => {
        if (res.body) {
          setPost(res.body);
          props.changeTitle(res.body.title);
        } else {
          window.location.pathname = '/404';
        }
      });
  }, []);

  function deleteHandler() {
    if (confirm('Are you sure you want to delete this?')) {
      fetch(`/api/posts/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then(() => {
          props.updatePosts();
          window.location.pathname = '/';
        });
    }
  }

  if (post) {
    return (
      <div className="cont">
        <div className="flex justify-between my-2">
          <h1 className="text-2xl">{post.title}</h1>
          <button className="btn btn--red" onClick={deleteHandler}>
            Delete
          </button>
        </div>
        <div className="my-3">{post.content}</div>
        <i>by {post.author}</i>
      </div>
    );
  }
  return (
    <div className="cont">
      <Loader />
    </div>
  );
}

View.propTypes = {
  changeTitle: PropTypes.func.isRequired,
  updatePosts: PropTypes.func.isRequired,
};

export default View;
