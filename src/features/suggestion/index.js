import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuggestion, selectSuggestion } from '../suggestion/suggestion.slice';

const Suggestion = () => {
  const dispatch = useDispatch();
  const { suggestion, status, error } = useSelector(selectSuggestion);

  useEffect(() => {
    dispatch(fetchSuggestion());
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Loading suggestion...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  if (!suggestion) {
    return <p>No suggestion available</p>;
  }

  return (
    <div>
      <h2>Suggestion of the Day</h2>
      <img src={suggestion.imageUrl} alt={suggestion.caption} width="100" />
      <p>{suggestion.caption}</p>
    </div>
  );
};

export default Suggestion;
