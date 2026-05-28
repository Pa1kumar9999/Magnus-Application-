import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  const [employeeOpen, setEmployeeOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <div style={styles.sidebar}>

      {/* User Info */}
      <div style={styles.userInfo}>
        <div style={styles.avatar}>👤</div>
        <div>
          <p style={styles.userName}>Guest User</p>
          <p style={styles.userRole}>🔒 User</p>
        </div>
      </div>

      {/* Home */}
      <div style={styles.menuItem}
        onClick={() => navigate('/home')}>
        🏠 Home
      </div>

      {/* Employee Menu */}
      <div style={styles.menuItem}
        onClick={() => 
          setEmployeeOpen(!employeeOpen)}>
        👥 Employee {employeeOpen ? '▲' : '▼'}
      </div>

      {employeeOpen && (
        <div style={styles.subMenu}>
          <div style={styles.subMenuItem}
            onClick={() => 
              navigate('/employee/create')}>
            ✏️ Create
          </div>
          <div style={styles.subMenuItem}
            onClick={() => 
              navigate('/employee/search')}>
            🔍 Search
          </div>
        </div>
      )}

      {/* More Menu */}
      <div style={styles.menuItem}
        onClick={() => setMoreOpen(!moreOpen)}>
        ☰ More {moreOpen ? '▲' : '▼'}
      </div>

      {moreOpen && (
        <div style={styles.subMenu}>
          <div style={styles.subMenuItem}
            onClick={() => navigate('/more/tabs')}>
            📑 Multiple Tabs
          </div>
          <div style={styles.subMenuItem}
            onClick={() => navigate('/more/menu')}>
            📋 Menu
          </div>
          <div style={styles.subMenuItem}
            onClick={() => 
              navigate('/more/autocomplete')}>
            🔤 Autocomplete
          </div>
          <div style={styles.subMenuItem}
            onClick={() => 
              navigate('/more/collapse')}>
            📂 Collapsible Content
          </div>
          <div style={styles.subMenuItem}
            onClick={() => navigate('/more/images')}>
            🖼️ Images
          </div>
          <div style={styles.subMenuItem}
            onClick={() => navigate('/more/slider')}>
            🎚️ Slider
          </div>
          <div style={styles.subMenuItem}
            onClick={() => 
              navigate('/more/tooltips')}>
            💬 Tooltips
          </div>
          <div style={styles.subMenuItem}
            onClick={() => navigate('/more/popups')}>
            🔔 Popups
          </div>
          <div style={styles.subMenuItem}
            onClick={() => navigate('/more/links')}>
            🔗 Links
          </div>
          <div style={styles.subMenuItem}
            onClick={() => navigate('/more/css')}>
            🎨 CSS Properties
          </div>
          <div style={styles.subMenuItem}
            onClick={() => 
              navigate('/more/iframes')}>
            🖥️ iFrames
          </div>
        </div>
      )}

      {/* Settings */}
      <div style={styles.menuItem}
        onClick={() => navigate('/settings')}>
        ⚙️ Settings
      </div>

    </div>
  );
}

const styles = {
  sidebar: {
    width: '220px',
    backgroundColor: '#2d3436',
    minHeight: '100vh',
    color: 'white',
    position: 'fixed',
    left: 0,
    top: 0,
    overflowY: 'auto'
  },
  userInfo: {
    padding: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    borderBottom: '1px solid #636e72',
    marginBottom: '10px'
  },
  avatar: { fontSize: '30px' },
  userName: {
    margin: 0,
    fontSize: '14px',
    fontWeight: 'bold'
  },
  userRole: {
    margin: 0,
    fontSize: '12px',
    color: '#b2bec3'
  },
  menuItem: {
    padding: '12px 20px',
    cursor: 'pointer',
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #3d3d3d'
  },
  subMenu: {
    backgroundColor: '#1e272e'
  },
  subMenuItem: {
    padding: '10px 30px',
    cursor: 'pointer',
    fontSize: '13px',
    borderBottom: '1px solid #2d3436'
  }
};

export default Sidebar;