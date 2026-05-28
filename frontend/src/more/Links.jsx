import React, { useState } from 'react';
import Layout from '../components/Layout';

function Links() {
  const [activeSubTab, setActiveSubTab] = useState('working');

  return (
    <Layout>
      <div style={styles.card}>
        <h3>Links</h3>
        <div style={styles.tabHeader}>
          {['working', 'broken', 'image', 'status'].map((tab) => (
            <button 
              key={tab}
              style={activeSubTab === tab ? styles.activeTab : styles.tab}
              onClick={() => setActiveSubTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Links {tab === 'status' && 'Codes'}
            </button>
          ))}
        </div>

        <div style={styles.content}>
          {activeSubTab === 'working' && (
            <div style={styles.linkRow}>
              <a href="#" style={{color: 'red', textDecoration: 'none'}}>Link 1</a>
              <a href="#" style={{color: 'blue', textDecoration: 'none'}}>Link 2</a>
              <a href="#" style={{color: 'green', textDecoration: 'none'}}>Link 3</a>
            </div>
          )}
          {activeSubTab !== 'working' && <p>Content for {activeSubTab} links coming soon...</p>}
        </div>
      </div>
    </Layout>
  );
}

const styles = {
  card: { backgroundColor: 'white', padding: '20px' },
  tabHeader: { display: 'flex', borderBottom: '1px solid #ddd', marginBottom: '20px' },
  tab: { padding: '10px 20px', cursor: 'pointer', border: 'none', background: 'none' },
  activeTab: { padding: '10px 20px', background: '#2c7be5', color: 'white', border: 'none' },
  content: { padding: '40px', textAlign: 'center' },
  linkRow: { display: 'flex', gap: '30px', justifyContent: 'center', fontSize: '18px' }
};

export default Links;