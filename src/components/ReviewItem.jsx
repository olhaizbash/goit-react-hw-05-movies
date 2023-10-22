import React from 'react';

export const ReviewItem = ({ author, content }) => {
  return (
    <div>
      <div>
        <h3>Author:</h3>
        <p>{author}</p>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
};
