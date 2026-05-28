import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!credential || !password) {
      setError('Please enter email and password!');
      return;
    }
    try {
      const response = await axios.post(
        'http://localhost:9090/api/auth/login',
        { credential: credential, password: password }
      );
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/home');
    } catch (err) {
      setError('Invalid email or password!');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>JALA Academy</h2>
        <p style={styles.subtitle}>Sign in to continue</p>
        {error && <p style={styles.error}>{error}</p>}
        <input
          style={styles.input}
          type="text"
          placeholder="Email or Mobile No"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={styles.button} onClick={handleLogin}>
          Sign In
        </button>
        <div style={styles.hint}>
          <p>Email: training@jalaacademy.com</p>
          <p>Password: jobprogram</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#e9ecef'
  },
  card: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    width: '350px',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  title: { color: '#2c7be5', marginBottom: '5px' },
  subtitle: { color: 'gray', marginBottom: '20px' },
  input: {
    width: '100%',
    padding: '10px',
    margin: '8px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
    boxSizing: 'border-box'
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#2c7be5',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px'
  },
  error: { color: 'red', fontSize: '14px' },
  hint: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f8f9fa',
    borderRadius: '4px',
    fontSize: '13px',
    color: 'gray'
  }
};

export default Login;
