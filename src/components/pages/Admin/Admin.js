import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
// import AdminHeader from '../../common/Admin/AdminHeader';
// import AdminSideBar from '../../common/Admin/AdminSidebar';
import StoryManager from './StoryManager/StoryManager';
import ParentFooter from '../../common/ParentFooter';

const Admin = () => {
  const { isAuthenticated } = useOktaAuth();

  return (
    <>
      <StoryManager />
      <ParentFooter />
    </>
  );
};

export default Admin;
