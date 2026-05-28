import React from 'react';
import Layout from '../components/Layout';

function Iframes() {
  return (
    <Layout>
      <div style={styles.card}>
        <h3>iFrames</h3>
        <p>This page demonstrates how to embed external content.</p>
        <div style={styles.frameWrapper}>
          <iframe 
            src="https://www.bing.com" 
            title="External Site"
            style={styles.iframe}
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}

const styles = {
  card: { backgroundColor: 'white', padding: '20px' },
  frameWrapper: { marginTop: '20px', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' },
  iframe: { width: '100%', height: '500px', border: 'none' }
};

export default Iframes;