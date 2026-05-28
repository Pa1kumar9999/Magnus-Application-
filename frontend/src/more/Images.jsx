import React, { useState } from 'react';
import Layout from '../components/Layout';

function Images() {
  return (
    <Layout>
      <div style={styles.card}>
        <h3>Uploading/Downloading Image</h3>
        
        <div style={styles.uploadSection}>
          <div style={styles.inputGroup}>
            <label>Select File :</label>
            <input type="file" style={styles.fileInput} />
          </div>
          <div style={styles.inputGroup}>
            <label>File Name :</label>
            <input type="text" placeholder="File Name" style={styles.textInput} />
          </div>
          <button style={styles.uploadBtn}>Upload</button>
        </div>

        <h4 style={{marginTop: '30px'}}>List Of Images :</h4>
        <div style={styles.imageList}>
          {/* Mock Image Card 1 */}
          <div style={styles.imageCard}>
            <div style={styles.imageHeader}>
              <span>img-20260130-wa0003.jpg</span>
              <span style={styles.deleteIcon}>✖</span>
            </div>
            <div style={styles.imagePlaceholder}>
                <p style={{fontSize: '12px', color: '#888'}}>img-20260130-wa0003.jpg</p>
            </div>
          </div>

          {/* Mock Image Card 2 */}
          <div style={styles.imageCard}>
            <div style={styles.imageHeader}>
              <span>api's participation.jpg</span>
              <span style={styles.deleteIcon}>✖</span>
            </div>
            <div style={styles.imagePlaceholder}>
                <p style={{fontSize: '12px', color: '#888'}}>api</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const styles = {
  card: { backgroundColor: 'white', padding: '20px', borderRadius: '4px' },
  uploadSection: { display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '5px' },
  fileInput: { border: '1px solid #ccc', padding: '5px' },
  textInput: { border: '1px solid #ccc', padding: '8px', borderRadius: '4px' },
  uploadBtn: { padding: '10px 25px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', alignSelf: 'flex-end' },
  imageList: { display: 'flex', gap: '20px', marginTop: '20px' },
  imageCard: { width: '250px', border: '1px solid #ddd', borderRadius: '4px' },
  imageHeader: { display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '2px solid #28a745', fontSize: '12px' },
  deleteIcon: { color: 'red', cursor: 'pointer', fontWeight: 'bold' },
  imagePlaceholder: { height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }
};

export default Images;