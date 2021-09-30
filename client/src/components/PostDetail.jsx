import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert, Spinner } from 'react-bootstrap';
import PostCard from './reuseable/PostCard';
import { Link } from 'react-router-dom';

export default function PostDetail(props) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [show, setShow] = useState(false);
  const user = JSON.parse(localStorage.getItem('media_user'));

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/post/' + props.match.params.id)
      .then(({ data }) => {
        setPost(data?.data);
        setLoading(!loading);
      })
      .catch(({ response }) => {
        setErr(response?.data);
        setShow(!show);
      });
  }, []);
  return (
    <div>
      {err && show ? (
        <Alert dismissible variant="danger" onClose={() => setShow(!show)}>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>Check your network settings and reload to try again later 🤪</p>
        </Alert>
      ) : (
        <>
          {loading ? (
            <Spinner animation="grow" />
          ) : (
            <div>
              <div className="container">
                {user?._id === post?.user._id ? (
                  <Link className="btn btn-warning">Edit</Link>
                ) : (
                  ''
                )}
                <PostCard {...post} />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
