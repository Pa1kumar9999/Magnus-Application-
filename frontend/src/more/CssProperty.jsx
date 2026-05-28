// Replace your existing CssProperty.jsx content with this:
import React, { useState } from 'react';
import Layout from '../components/Layout';

function CssProperty() {
  const [activeTab, setActiveTab] = useState('Links');
  const tabs = ['Links', 'Labels', 'Buttons', 'Alerts', 'Progress Bars'];

  return (
    <Layout>
      <div style={styles.card}>
        <h3>Css Properties</h3>
        <div style={styles.tabHeader}>
          {tabs.map((tab) => (
            <button 
              key={tab}
              style={activeTab === tab ? styles.activeTab : styles.tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div style={styles.content}>
          {activeTab === 'Links' && (
            <div style={styles.linkRow}>
              <span style={{color: 'red', cursor: 'pointer'}}>Link 1</span>
              <span style={{color: 'blue', cursor: 'pointer'}}>Link 2</span>
              <span style={{color: 'green', cursor: 'pointer'}}>Link 3</span>
              <span style={{color: 'orange', cursor: 'pointer'}}>Link 4</span>
              <span style={{color: 'purple', cursor: 'pointer'}}>Link 5</span>
            </div>
          )}
          {/* Add more conditions for Labels/Buttons as you need them */}
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
  content: { padding: '40px' },
  linkRow: { display: 'flex', gap: '25px', justifyContent: 'center', fontSize: '18px' }
};

export default CssProperty;