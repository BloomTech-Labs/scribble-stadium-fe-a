import React from 'react';
import { dummyStoryData } from './dummyStoryData';
import StoryCard from './StoryCard';
import { useEffect } from 'react';
import { getStoryData } from '../../../../utils/storyData';
import './storyManager.css';

const StoriesList = () => {

  useEffect(() => {
    setStories(getStoryData());
  }, []);

  return (
    <div className="cardHolder">
      {dummyStoryData.map(storyData => {
        return <StoryCard key={storyData.id} storyData={storyData} />;
      })}
    </div>
  );
};

export default StoriesList;
