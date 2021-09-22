import axios from 'axios';
import { Alert, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PostCard from './reuseable/PostCard';

export default function Post(props) {
  const { posts, error, loading, show } = props;

  return (
    <div>
      <div style={{ textAlign: 'right' }} className="container mb-2">
        <Link className="btn btn-primary" to="/main/new/post">
          new Post
        </Link>
      </div>
      {error && show ? (
        <Alert dismissible variant="danger">
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
                {posts?.map((data) => {
                  return <PostCard {...data} key={data._id} />;
                })}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
