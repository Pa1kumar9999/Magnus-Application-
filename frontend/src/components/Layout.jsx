import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

function Layout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div style={styles.container}>

      {/* Sidebar on Left */}
      <Sidebar />

      {/* Main Content on Right */}
      <div style={styles.main}>

        {/* Top Bar */}
        <div style={styles.topBar}>
          <h2 style={styles.logo}>Magnus</h2>
          <button style={styles.logoutBtn}
            onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>

        {/* Page Content */}
        <div style={styles.content}>
          {children}
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex'
  },
  main: {
    marginLeft: '220px',
    flex: 1,
    minHeight: '100vh',
    backgroundColor: '#f5f5f5'
  },
  topBar: {
    backgroundColor: '#2c7be5',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    color: 'white',
    margin: 0
  },
  logoutBtn: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid white',
    padding: '5px 15px',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  content: {
    padding: '20px'
  }
};

export default Layout;