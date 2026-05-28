import React, { useState } from 'react';
import Layout from '../components/Layout';

function Collapse() {
  const [openSection, setOpenSection] = useState(1);

  const toggle = (id) => setOpenSection(openSection === id ? null : id);

  return (
    <Layout>
      <div style={styles.card}>
        <h3>Collapsible Content</h3>
        <div style={styles.tabHeader}>
          <button style={styles.activeTab}>Single Collapse</button>
          <button style={styles.tab}>Multiple Collapse</button>
        </div>

        <div style={styles.accordion}>
          {/* Section 1 */}
          <div style={styles.item}>
            <div style={styles.header} onClick={() => toggle(1)}>
              Know your goals and Prioritize Wisely <span>{openSection === 1 ? '-' : '+'}</span>
            </div>
            {openSection === 1 && (
              <div style={styles.content}>
                What are your priorities for the day? Make a list...
              </div>
            )}
          </div>

          {/* Section 2 */}
          <div style={styles.item}>
            <div style={styles.header} onClick={() => toggle(2)}>
              Be focused and Eliminate Distractions <span>{openSection === 2 ? '-' : '+'}</span>
            </div>
            {openSection === 2 && <div style={styles.content}>Focus on one task at a time...</div>}
          </div>
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
  accordion: { marginTop: '10px' },
  item: { marginBottom: '5px', border: '1px solid #ddd' },
  header: { backgroundColor: '#2c7be5', color: 'white', padding: '10px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' },
  content: { padding: '15px', backgroundColor: '#f9f9f9' }
};

export default Collapse;