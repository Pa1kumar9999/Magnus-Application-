import React, { useState } from 'react';
import Layout from '../components/Layout';

function Autocomplete() {
  const [subTab, setSubTab] = useState('single');

  return (
    <Layout>
      <div style={styles.card}>
        <h3>Autocomplete</h3>
        <div style={styles.tabHeader}>
          <button 
            style={subTab === 'single' ? styles.activeTab : styles.tab} 
            onClick={() => setSubTab('single')}
          >
            Single Values
          </button>
          <button 
            style={subTab === 'multiple' ? styles.activeTab : styles.tab} 
            onClick={() => setSubTab('multiple')}
          >
            Multiple Values
          </button>
        </div>

        <div style={styles.tabContent}>
          {subTab === 'single' ? (
            <div>
              <label>Tags : </label>
              <input type="text" style={styles.input} placeholder="Type to search..." />
            </div>
          ) : (
            <div>
              <label>Tags : </label>
              <input type="text" style={styles.input} placeholder="Select multiple..." />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

const styles = {
  card: { backgroundColor: 'white', padding: '20px', borderRadius: '4px', border: '1px solid #ddd' },
  tabHeader: { display: 'flex', borderBottom: '1px solid #ddd', marginBottom: '20px' },
  tab: { padding: '10px 20px', cursor: 'pointer', border: 'none', background: 'none' },
  activeTab: { padding: '10px 20px', cursor: 'pointer', border: 'none', background: '#2c7be5', color: 'white' },
  tabContent: { padding: '20px' },
  input: { width: '100%', maxWidth: '400px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }
};

export default Autocomplete;