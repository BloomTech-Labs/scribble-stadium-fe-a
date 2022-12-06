import React from 'react';
// import { dummyStoryData } from './dummyStoryData';
import StoryCard from './StoryCard';
import { useState, useEffect } from 'react';
import { getStoryData } from '../../../../api';

const StoriesList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setStories(getStoryData());
  }, []);

  return (
    <div className="stories-list">
      {stories.map(storyData => {
        return (
          <StoryCard
            key={storyData.id}
            storyData={storyData}
            setStoriesData={setStories}
          />
        );
      })}
    </div>
  );
};

export default StoriesList;
