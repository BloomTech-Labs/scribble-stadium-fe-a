import React from 'react';
import StoryCard from './StoryCard';
import './storyManager.css';

const StoriesList = props => {
  const { storyData } = props;

  return (
    <div className="cardHolder">
      {storyData.map(storyData => {
        return <StoryCard key={storyData.id} storyData={storyData} />;
      })}
    </div>
  );
};

export default StoriesList;
