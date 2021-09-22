import React from 'react';
import LatestPost from './LatestPost';
import TrendingCategories from './TrendingCateogories';

export default function RightComponent(props) {
  const { posts, error, loading, show } = props;

  return (
    <>
      <LatestPost posts={posts} error={error} loading={loading} show={show} />

      {/* Trending Categories */}
      <TrendingCategories />
    </>
  );
}
