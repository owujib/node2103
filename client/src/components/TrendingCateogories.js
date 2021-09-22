import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function TrendingCategories() {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/category')
      .then(({ data }) => {
        console.log(data);
        setCategory(data?.data);
        setLoading(!loading);
      })
      .catch(({ response }) => {
        setErr(response?.data);
        setShow(!show);
      });
  }, []);
  return (
    <>
      <div className="card p-2 bg-light mt-4">
        <h4>Trending categories</h4>
        <ol className="list-group list-group-numbered">
          {category?.map((data) => {
            return (
              <li className="list-group-item bg-light  d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <Link to={'/categories/' + data._id}>{data.title}</Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
