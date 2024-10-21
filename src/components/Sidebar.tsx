import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';
import { toggleSidebar, closeSidebar } from '../redux/sidebarSlice';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  const handleOutsideClick = (event: MouseEvent) => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && !sidebar.contains(event.target as Node)) {
      dispatch(closeSidebar());
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, dispatch]);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`} id="sidebar">
      <div className="hamburger" onClick={() => dispatch(toggleSidebar())}>
        {isOpen ? '✖' : '☰'}
      </div>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">
              <span>🏠︎</span>
              <span>{isOpen && 'Home'}</span>
            </Link>
          </li>
          <li>
            <Link to="/search">
              <span>⌕</span>
              <span>{isOpen && 'Search'}</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <span>🌣</span>
              <span>{isOpen && 'Settings'}</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <span>ⓘ</span>
              <span>{isOpen && 'About'}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;