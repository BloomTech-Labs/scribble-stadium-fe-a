import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import AdminHeader from '../../common/Admin/AdminHeader';
// import AdminSideBar from '../../common/Admin/AdminSidebar';
import StoryManager from './StoryManager/StoryManager';
import ParentFooter from '../../common/ParentFooter';

const Admin = () => {
  const { isAuthenticated } = useOktaAuth();

  return (
    isAuthenticated && (
      <Router>
        {/* <AdminHeader /> */}
        <div className="main">
          {/* <AdminSideBar /> */}
          <div className="container">
            <StoryManager />
            <Switch>
              <Route path="/admin/storymanager" component={StoryManager} />
            </Switch>
          </div>
        </div>
        <div>
          {/* <ParentFooter layoutContainerCheck={'no-scroll'} /> */}
          <ParentFooter />
        </div>
      </Router>
    )
  );
};

export default Admin;
