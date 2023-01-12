import React from 'react';
// import AdminHeader from '../../common/Admin/AdminHeader';
// import AdminSideBar from '../../common/Admin/AdminSidebar';
import StoryManager from './StoryManager/StoryManager';
import ParentFooter from '../../common/ParentFooter';
import { dummyStoryData } from './StoryManager/dummyStoryData';

const Admin = () => {
  return (
    <div className="main">
      <StoryManager dummyStoryData={dummyStoryData} />
      <ParentFooter />
    </div>
  );
};

export default Admin;
