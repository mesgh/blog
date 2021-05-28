import React, { useState } from "react";
import PropTypes from 'prop-types';

function New(props) {
    props.changeTitle("New");
    const id = Date.now();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, title, description, author, content })
    })
      .then(res => res.json())
      .then(res => {
        if (res.body) {
          props.updatePosts();
          window.location.pathname = `/view/${res.body.id}`;
        } else {
          alert(res.message);
        }
      });
  }

    return (
      <div className="cont">
        <form onSubmit={submitHandler}>
          <h4>Title</h4>
          <input
            type="text"
            className="form-input"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <h4>Description</h4>
          <input
            type="text"
            className="form-input"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <h4>Author</h4>
          <input
            type="text"
            className="form-input"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
          <h4>Content</h4>
          <textarea
            cols="30"
            rows="10"
            className="form-input"
            value={content}
            onChange={e => setContent(e.target.value)}
          ></textarea>
          <div className="text-center">
            <button className="btn btn--green my-3" type="submit">Send</button>
          </div>
        </form>
      </div>
    );
}

New.propTypes = {
  changeTitle: PropTypes.func.isRequired,
  updatePosts : PropTypes.func.isRequired,
};

export default New;
