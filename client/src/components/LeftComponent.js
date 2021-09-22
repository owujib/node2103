import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import NewPost from './NewPost';
import Post from './Post';
import PostDetail from './PostDetail';

export default function LeftComponent(props) {
  const { posts, error, loading, show } = props;
  return (
    <>
      <Route
        exact
        path="/main/posts"
        render={(routerProps) => (
          <Post
            posts={posts}
            error={error}
            loading={loading}
            show={show}
            {...routerProps}
          />
        )}
      />

      <Route exact path="/main/posts/:id" component={PostDetail} />
      <Route exact path="/main/new/post" component={NewPost} />
    </>
  );
}
