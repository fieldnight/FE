import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SearchGalleryUI from './SearchGallery.presenter';

export default function SearchGallery() {
  const [searchPosts, setSearchPosts] = useState([]);

  const navigate = useNavigate();

  const handlePostClick = (post) => {
    navigate(`/review/${post.id}`);
  };

  const fetchPostData = async () => {
    try {
      const res = await axios.get(`/review`);
      const { data } = res;
      setSearchPosts(data.values);
      console.log(data);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <SearchGalleryUI
      searchPosts={searchPosts.length === 0 ? [1, 2, 3, 4, 5, 6, 7] : searchPosts}
      handlePostClick={handlePostClick}
    />
  );
}
