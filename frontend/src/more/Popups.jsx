import React from 'react';
import Layout from '../components/Layout';

function Popups() {
  const showAlert = () => alert("This is a simple Alert!");
  
  const showConfirm = () => {
    const result = window.confirm("Do you like this project?");
    if (result) alert("Thank you! 😊");
    else alert("I will work harder! 💪");
  };

  const showPrompt = () => {
    const name = window.prompt("What is your name?");
    if (name) alert("Hello " + name + "!");
  };

  return (
    <Layout>
      <div style={styles.card}>
        <h3>Popups & Alerts</h3>
        <p>Click the buttons below to see different types of popups:</p>
        <div style={styles.btnRow}>
          <button style={styles.btn} onClick={showAlert}>Alert Box</button>
          <button style={styles.btn} onClick={showConfirm}>Confirm Box</button>
          <button style={styles.btn} onClick={showPrompt}>Prompt Box</button>
        </div>
      </div>
    </Layout>
  );
}

const styles = {
  card: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' },
  btnRow: { display: 'flex', gap: '15px', marginTop: '20px' },
  btn: { padding: '10px 20px', backgroundColor: '#2c7be5', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default Popups;