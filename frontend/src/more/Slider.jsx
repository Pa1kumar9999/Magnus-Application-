import React, { useState } from 'react';
import Layout from '../components/Layout';

function Slider() {
  const [value, setValue] = useState(3);

  return (
    <Layout>
      <div style={styles.card}>
        <h3>Slider</h3>
        <div style={styles.tabHeader}>
          <button style={styles.activeTab}>Slider</button>
        </div>

        <div style={styles.content}>
          <input 
            type="range" 
            min="0" 
            max="10" 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            style={styles.rangeInput}
          />
          <p style={styles.valueText}>Current Slider Value: <strong>{value}</strong></p>
        </div>
      </div>
    </Layout>
  );
}

const styles = {
  card: { backgroundColor: 'white', padding: '20px' },
  tabHeader: { borderBottom: '1px solid #ddd', marginBottom: '30px' },
  activeTab: { padding: '10px 20px', background: 'none', border: 'none', borderBottom: '3px solid #2c7be5', color: '#2c7be5', cursor: 'default' },
  content: { padding: '20px' },
  rangeInput: { width: '100%', cursor: 'pointer' },
  valueText: { marginTop: '20px', fontSize: '18px' }
};

export default Slider;