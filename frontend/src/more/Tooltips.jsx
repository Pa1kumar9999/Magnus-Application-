import React, { useState } from 'react';
import Layout from '../components/Layout';

function Tooltips() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Layout>
      <div style={styles.card}>
        <h3>Tooltip</h3>
        <div style={styles.tabHeader}>
          <button style={styles.activeTab}>Tooltips</button>
        </div>

        <div style={styles.content}>
          <div style={styles.tooltipContainer}>
            <button 
              style={styles.btn}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              Check the Tooltip Before You Click.
            </button>
            {showTooltip && (
              <div style={styles.tooltipBox}>
                Thank you for being here!
                <div style={styles.arrow}></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

const styles = {
  card: { backgroundColor: 'white', padding: '20px', minHeight: '400px' },
  tabHeader: { borderBottom: '1px solid #ddd', marginBottom: '50px' },
  activeTab: { padding: '10px 20px', background: 'none', border: 'none', borderBottom: '2px solid #2c7be5', color: '#2c7be5' },
  content: { display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' },
  tooltipContainer: { position: 'relative', display: 'inline-block' },
  btn: { padding: '10px 20px', backgroundColor: '#2c7be5', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  tooltipBox: {
    position: 'absolute', bottom: '-45px', left: '50%', transform: 'translateX(-50%)',
    backgroundColor: '#333', color: 'white', padding: '8px 15px', borderRadius: '4px',
    fontSize: '14px', whiteSpace: 'nowrap', zIndex: 10
  },
  arrow: {
    position: 'absolute', top: '-5px', left: '50%', transform: 'translateX(-50%)',
    width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: '6px solid #333'
  }
};

export default Tooltips;