import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Main from './components/Main';
import { userProfile } from './actions/auth.actions';

function App() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const getUserProfile = bindActionCreators(userProfile, dispatch);
  const state = useSelector((data) => data);
  useEffect(() => {
    getUserProfile();
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
    <div id="main">
      <Navigation state={state.auth} />
      <div className="mt-4 container">
        <Route path="/login" component={Login} />

        <Route path="/main" component={Main} />
      </div>
    </div>
  );
}

export default App;
