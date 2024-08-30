import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removePhoto, selectFilteredPhotos } from '../photos.slice';

const PhotoList = () => {
  const dispatch = useDispatch();
  const photos = useSelector(selectFilteredPhotos);

  const handleRemove = (id) => {
    dispatch(removePhoto(id));
  };

  return (
    <div>
      <h2>Dog Photos</h2>
      {photos.length === 0 ? (
        <p>No photos available</p>
      ) : (
        <ul>
          {photos.map(photo => (
            <li key={photo.id}>
              <img src={photo.imageUrl} alt={photo.caption} width="100" />
              <p>{photo.caption}</p>
              <button
                data-testid={`${photo.caption.toLowerCase().replace(/\s+/g, '-')}-button`}
                onClick={() => handleRemove(photo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PhotoList;
