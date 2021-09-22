import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';

function Main() {
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
  console.log(post);
  return (
    <div id="main">
      <Row>
        <Col md={9}>
          <LeftComponent
            posts={post}
            error={err}
            loading={loading}
            show={show}
          />
        </Col>
        <Col md={3}>
          <RightComponent
            posts={post}
            error={err}
            loading={loading}
            show={show}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Main;
