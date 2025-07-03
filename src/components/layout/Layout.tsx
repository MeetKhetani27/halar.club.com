import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow w-full overflow-hidden">
        <div className="w-full">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;