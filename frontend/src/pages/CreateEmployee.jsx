import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEmployee } from '../services/api';
import Layout from '../components/Layout';

function CreateEmployee() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    dateOfBirth: '',
    gender: 'Male',
    address: '',
    country: '',
    city: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      await createEmployee(formData);
      setMessage('Employee Created Successfully!');
      setTimeout(() => {
        navigate('/employee/search');
      }, 2000);
    } catch (err) {
      setMessage('Error! Please try again!');
    }
  };

  return (
    <Layout>
      <div style={styles.formContainer}>
        <h3>Create Employee</h3>
        {message && (
          <p style={styles.message}>{message}</p>
        )}
        <div style={styles.row}>
          <div style={styles.field}>
            <label>First Name</label>
            <input style={styles.input}
              type="text" name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange} />
          </div>
          <div style={styles.field}>
            <label>Last Name</label>
            <input style={styles.input}
              type="text" name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange} />
          </div>
          <div style={styles.field}>
            <label>Email</label>
            <input style={styles.input}
              type="email" name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange} />
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.field}>
            <label>Mobile Number</label>
            <input style={styles.input}
              type="text" name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange} />
          </div>
          <div style={styles.field}>
            <label>Date of Birth</label>
            <input style={styles.input}
              type="date" name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange} />
          </div>
          <div style={styles.field}>
            <label>Gender</label>
            <select style={styles.input}
              name="gender"
              value={formData.gender}
              onChange={handleChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
        <div style={styles.field}>
          <label>Address</label>
          <textarea style={styles.textarea}
            name="address" placeholder="Address"
            value={formData.address}
            onChange={handleChange} />
        </div>
        <div style={styles.row}>
          <div style={styles.field}>
            <label>Country</label>
            <input style={styles.input}
              type="text" name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange} />
          </div>
          <div style={styles.field}>
            <label>City</label>
            <input style={styles.input}
              type="text" name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange} />
          </div>
        </div>
        <div style={styles.btnRow}>
          <button style={styles.submitBtn}
            onClick={handleSubmit}>
            Create Employee
          </button>
          <button style={styles.cancelBtn}
            onClick={() => navigate('/home')}>
            Cancel
          </button>
        </div>
      </div>
    </Layout>
  );
}

const styles = {
  formContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  row: {
    display: 'flex',
    gap: '15px',
    marginBottom: '15px'
  },
  field: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px'
  },
  textarea: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
    height: '80px',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '15px'
  },
  btnRow: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px'
  },
  submitBtn: {
    padding: '10px 20px',
    backgroundColor: '#2c7be5',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  cancelBtn: {
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  message: {
    color: 'green',
    fontWeight: 'bold',
    marginBottom: '10px'
  }
};

export default CreateEmployee;