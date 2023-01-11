import React from 'react';
import { dummyStoryData } from './dummyStoryData';
import StoryCard from './StoryCard';
import './storyManager.css';

const StoriesList = () => {
  return (
    <div className="cardHolder">
      {dummyStoryData.map(storyData => {
        return <StoryCard key={storyData.id} storyData={storyData} />;
      })}
    </div>
  );
};

export default StoriesList;
