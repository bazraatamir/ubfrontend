// Layout.js
import React from 'react';
// import Footer from './Footer';
import SideBar from './SideBar';
import MainContent from './MainContent';

const Layout = ({ children }) => {
  return (
    <div>
      <SideBar />
      <MainContent />
    </div>
  );
};

export default Layout;
