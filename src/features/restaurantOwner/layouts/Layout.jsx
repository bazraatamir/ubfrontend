// Layout.js
import React from 'react';
import Footer from './Footer';
import SideBar from './SideBar';

const Layout = ({ children }) => {
  return (
    <div>
      <SideBar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
