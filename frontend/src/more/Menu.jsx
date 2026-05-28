import React, { useState } from 'react';
import Layout from '../components/Layout';

function Menu() {
  const [activeSubTab, setActiveSubTab] = useState('single');

  return (
    <Layout>
      <div style={styles.card}>
        <h3>Menu</h3>
        <div style={styles.tabHeader}>
          <button 
            style={activeSubTab === 'single' ? styles.activeTab : styles.tab} 
            onClick={() => setActiveSubTab('single')}
          >
            Single Menus
          </button>
          <button 
            style={activeSubTab === 'sub' ? styles.activeTab : styles.tab} 
            onClick={() => setActiveSubTab('sub')}
          >
            Sub Menus
          </button>
        </div>

        <div style={styles.content}>
          <div style={styles.menuContainer}>
            <button style={styles.menuItem}>Testing</button>
            <button style={styles.menuItem}>Java</button>
            <button style={styles.menuItem}>.Net</button>
            <button style={styles.lastMenuItem}>Data Base</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const styles = {
  card: { backgroundColor: 'white', padding: '20px', borderRadius: '4px' },
  tabHeader: { display: 'flex', borderBottom: '1px solid #ddd', marginBottom: '20px' },
  tab: { padding: '10px 20px', cursor: 'pointer', border: 'none', background: 'none' },
  activeTab: { padding: '10px 20px', background: '#2c7be5', color: 'white', border: 'none' },
  content: { padding: '20px' },
  menuContainer: { display: 'flex', flexDirection: 'column', width: '300px' },
  menuItem: { padding: '12px', backgroundColor: '#5897fb', color: 'white', border: 'none', borderBottom: '1px solid #ffffff44', cursor: 'pointer', textAlign: 'center' },
  lastMenuItem: { padding: '12px', backgroundColor: '#90bede', color: '#2c7be5', border: 'none', cursor: 'pointer', textAlign: 'center' }
};

export default Menu;