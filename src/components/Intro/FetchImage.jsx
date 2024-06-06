import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GOOGLE_API_KEY = 'AIzaSyA5o9sdRWTCGf-DuKLi84idhtDu22uxNII';  // Replace with your actual API key
const CX = 'b3503206c75fc4bf3';
const GOOGLE_LOGO = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';

const FetchImage = ({ query }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  const fetchImageUrl = async () => {
    if (!query || !query.trim()) {
      setError('Query cannot be empty.');
      setImageUrl(GOOGLE_LOGO);
      return;
    }

    try {
      const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
        params: {
          q: query,
          cx: CX,
          key: GOOGLE_API_KEY,
          searchType: 'image',
          num: 1,
        },
      });
      if (response.data.items && response.data.items.length > 0) {
        setImageUrl(response.data.items[0].link);
        setError(null);
      } else {
        console.error('No items found in response:', response);
        setImageUrl(GOOGLE_LOGO);
        setError('No items found.');
      }
    } catch (error) {
      console.error('Error fetching image URL:', error);
      setError('Error fetching image.');
      setImageUrl(GOOGLE_LOGO);
    }
  };

  // Fetch image URL on component mount or when the query changes
  useEffect(() => {
    fetchImageUrl();
  }, [query]);

  return (
    <div>
      {error && <p>{error}</p>}
      {imageUrl && <img src={imageUrl} alt="Search result" style={{ width: '300px', height: '200px' }} />}
    </div>
  );
};

export default FetchImage;
