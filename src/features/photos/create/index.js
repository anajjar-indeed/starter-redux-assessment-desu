import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPhoto } from '../photos.slice';

const AddPhoto = () => {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPhoto = {
      id: Date.now(),
      imageUrl,
      caption,
    };
    dispatch(addPhoto(newPhoto));
    setImageUrl('');
    setCaption('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your image's url:
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </label>
      <label>
        Enter your image's caption:
        <input
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPhoto;
