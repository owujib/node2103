import React, { useEffect, useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';

export default function LeftComponent() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/post')
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
                {post?.map((data) => {
                  return (
                    <div
                      key={data._id}
                      className="container card bg-light mb-3"
                    >
                      <div>{data?.user?.username}</div>
                      <div className="d-flex">
                        <span className="badge bg-light text-dark p-1">
                          {data?.category?.title}
                        </span>
                      </div>
                      <div
                        style={{
                          width: '100%',
                          height: '450px',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'contain',
                          backgroundPosition: 'top left',
                          backgroundImage: `url('http://localhost:5000/${data?.image}')`,
                        }}
                      ></div>
                      <div className="row mt-2 mb-2">
                        <div className="col-4 text-center">
                          <div className="card w-100">👍</div>
                        </div>
                        <div className="col-4 text-center">
                          <div className="card w-100">🗨</div>
                        </div>
                        <div className="col-4 text-center">
                          <div className="card w-100">🔥</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
