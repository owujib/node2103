import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';
import Navigation from './components/Navigation';
import LeftComponent from './components/LeftComponent';
import RightComponent from './components/RightComponent';
import Login from './components/Login';
import Main from './components/Main';

function App() {
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
      <Navigation />
      <div className="mt-4 container">
        <Route path="/login" component={Login} />

        <Route path="/main" component={Main} />
      </div>
    </div>
  );
}

export default App;
