import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  return (
    <div
      style={{
        marginLeft: isSidebarOpen ? '220px' : '60px',
        transition: 'margin-left 0.3s ease',
        padding: '20px',
      }}
    >
      {children}
    </div>
  );
};

export default ContentLayout;
