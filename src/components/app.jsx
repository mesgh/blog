import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "../views/Nav";
import List from "../views/List";
import View from "../views/View";
import New from "../views/New";
import NotFound from "../views/NotFound";

export function App() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
    .then((res) => res.json())
    .then(({ body: posts }) => {
      setPosts(posts)
    });
  }, []);

  function updatePosts() {
    setPosts([]);
  }


  function changeTitle(title) {
    setTitle(title);
  }
  return (
    <React.Fragment>
      <Nav title={title} />
      <Switch>
        <Route exact path="/">
          <List posts={posts} changeTitle={changeTitle} />
        </Route>
        <Route exact path="/view/:id">
          <View changeTitle={changeTitle} updatePosts={updatePosts} />
        </Route>
        <Route exact path="/new">
          <New changeTitle={changeTitle} updatePosts={updatePosts} />
        </Route>
        <Route exact path="/404">
          <NotFound changeTitle={changeTitle} />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
