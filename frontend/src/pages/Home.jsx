import React from 'react';
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout>
      <div style={styles.content}>
        <h1>Welcome to JALA Academy</h1>
        <p>The world's best up-skilling academy</p>

        <div style={styles.infoBox}>
          <p>Do you want to learn Selenium/cucumber
            Automation completely with Practical
            Scenarios in 7 Days? Use this website
            to find all the scenarios at one place.
          </p>
        </div>

        <div style={styles.yellowBox}>
          <p>If you are a working professional,
            Up-skill with JALA Academy Job Guarantee
            Programs to keep your Job secure for
            10 Years</p>
        </div>
      </div>
    </Layout>
  );
}

const styles = {
  content: {
    textAlign: 'center',
    padding: '30px'
  },
  infoBox: {
    border: '1px solid #dee2e6',
    padding: '15px',
    borderRadius: '4px',
    marginTop: '20px',
    textAlign: 'left'
  },
  yellowBox: {
    backgroundColor: 'yellow',
    padding: '15px',
    borderRadius: '4px',
    marginTop: '20px',
    textAlign: 'left'
  }
};

export default Home;