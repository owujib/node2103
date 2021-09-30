import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Navbar, Nav } from 'react-bootstrap';

import { logout } from '../actions/auth.actions';
function Navigation({ state }) {
  let { isAuthenticated, isLoading, user } = state;

  const dispatch = useDispatch();
  const logoutUser = bindActionCreators(logout, dispatch);
  const auth = useSelector((data) => data.auth);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/main/posts">
                Posts
              </Nav.Link>
            </Nav>

            {isAuthenticated ? (
              <>
                <Navbar.Text>
                  Signed in as: <Link to="/profile">{user?.username}</Link>
                </Navbar.Text>
                <Navbar.Text>
                  <button
                    onClick={() => logoutUser()}
                    className="btn btn-danger mx-4 text-light"
                  >
                    Logout
                  </button>
                </Navbar.Text>
              </>
            ) : (
              <>
                <Nav.Link
                  as={Link}
                  className="btn btn-primary text-light mx-2"
                  to="/login"
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="text-light btn btn-primary"
                  to="/register"
                >
                  Register
                </Nav.Link>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
