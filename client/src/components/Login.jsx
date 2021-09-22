import { useState } from 'react';
import axios from 'axios';
import { Alert, Spinner, Form, FormControl, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PostCard from './reuseable/PostCard';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  console.log(props);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <Form
        className="w-50 card p-5"
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();

          axios
            .post('http://localhost:5000/api/user/login', { email, password })
            .then(({ data }) => {
              if (data?.status === 'success') {
                const user = { ...data?.data, token: data?.token };
                localStorage.setItem('media_user', JSON.stringify(user));
                props.history.push('/main/posts');
              }
            })
            .catch(({ response }) => {
              setError({
                data: response?.data?.data,
                status: response?.data?.status,
              });
              console.log(error);
            });
        }}
      >
        <FormGroup className="m-2">
          <FormControl
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup className="m-2">
          <FormControl
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup className="m-2">
          <FormControl
            type="submit"
            value="login"
            className="btn btn-primary"
          />
        </FormGroup>
      </Form>
    </div>
  );
}
