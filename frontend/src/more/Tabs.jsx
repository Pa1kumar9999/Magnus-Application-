import React, { useState } from 'react';
import Layout from '../components/Layout';

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Layout>
      <div style={styles.card}>
        <h3>Multiple Tabs</h3>
        <div style={styles.tabHeader}>
          <button 
            style={activeTab === 1 ? styles.activeTab : styles.tab} 
            onClick={() => setActiveTab(1)}
          >
            Tab 1
          </button>
          <button 
            style={activeTab === 2 ? styles.activeTab : styles.tab} 
            onClick={() => setActiveTab(2)}
          >
            Tab 2
          </button>
          <button 
            style={activeTab === 3 ? styles.activeTab : styles.tab} 
            onClick={() => setActiveTab(3)}
          >
            Tab 3
          </button>
        </div>

        <div style={styles.tabContent}>
          {activeTab === 1 && <div><h4>Information 1</h4><p>This is the first tab content. You can put any employee data here.</p></div>}
          {activeTab === 2 && <div><h4>Information 2</h4><p>This is the second tab. React makes switching this super fast!</p></div>}
          {activeTab === 3 && <div><h4>Information 3</h4><p>Third tab content. No page reload happens here!</p></div>}
        </div>
      </div>
    </Layout>
  );
}

const styles = {
  card: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' },
  tabHeader: { display: 'flex', borderBottom: '2px solid #ddd', marginBottom: '20px' },
  tab: { padding: '10px 20px', cursor: 'pointer', border: 'none', background: 'none', fontSize: '16px' },
  activeTab: { padding: '10px 20px', cursor: 'pointer', border: 'none', background: 'none', fontSize: '16px', borderBottom: '3px solid #2c7be5', color: '#2c7be5', fontWeight: 'bold' },
  tabContent: { padding: '10px', minHeight: '100px' }
};

export default Tabs;