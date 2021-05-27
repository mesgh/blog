import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Post({ post }) {
  return (
    <li className="p-2 border-2 rounded-md my-3 transition duration-500 ease-in-out hover:border-green-500 hover:shadow-md cursor-pointer">
      <Link to={`/view/${post.id}`}>
        <span className="block">
          <span className="font-bold">
            {post.author} - {post.title}
          </span>
        </span>
        <span className="block">{post.description}</span>
      </Link>
    </li>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post;
