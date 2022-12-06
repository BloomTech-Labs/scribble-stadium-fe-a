import React from 'react';
// import AdminHeader from '../../common/Admin/AdminHeader';
// import AdminSideBar from '../../common/Admin/AdminSidebar';
import StoryManager from './StoryManager/StoryManager';
import ParentFooter from '../../common/ParentFooter';

const Admin = () => {
  return (
    <div className="main">
      <StoryManager />
      <ParentFooter />
    </div>
  );
};

export default Admin;
