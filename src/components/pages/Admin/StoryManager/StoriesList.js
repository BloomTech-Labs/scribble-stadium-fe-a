import React from 'react';
import StoryCard from './StoryCard';
import './storyManager.css';

const StoriesList = props => {
  const { dummyStoryData } = props;

  return (
    <div className="cardHolder">
      {dummyStoryData.map(storyData => {
        return <StoryCard key={storyData.id} storyData={storyData} />;
      })}
    </div>
  );
};

export default StoriesList;
