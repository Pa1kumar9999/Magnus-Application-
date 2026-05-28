import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployeeById, updateEmployee } 
  from '../services/api';

function EditEmployee() {
  const navigate = useNavigate();
  const { id } = useParams();

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

  // Load employee data when page opens
  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const response = await getEmployeeById(id);
      setFormData(response.data);
    } catch (err) {
      setMessage('Error loading employee!');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async () => {
    try {
      await updateEmployee(id, formData);
      setMessage('Employee Updated Successfully!');
      setTimeout(() => {
        navigate('/employee/search');
      }, 2000);
    } catch (err) {
      setMessage('Error updating employee!');
    }
  };

  return (
    <div style={styles.container}>

      {/* Top Bar */}
      <div style={styles.topBar}>
        <h2 style={styles.logo}>Magnus</h2>
        <button style={styles.backBtn}
          onClick={() => navigate('/employee/search')}>
          Back to Search
        </button>
      </div>

      {/* Form */}
      <div style={styles.formContainer}>
        <h3>Edit Employee</h3>

        {message && (
          <p style={styles.message}>{message}</p>
        )}

        <div style={styles.row}>
          <div style={styles.field}>
            <label>First Name</label>
            <input
              style={styles.input}
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div style={styles.field}>
            <label>Last Name</label>
            <input
              style={styles.input}
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div style={styles.field}>
            <label>Email</label>
            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.field}>
            <label>Mobile Number</label>
            <input
              style={styles.input}
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>
          <div style={styles.field}>
            <label>Date of Birth</label>
            <input
              style={styles.input}
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth || ''}
              onChange={handleChange}
            />
          </div>
          <div style={styles.field}>
            <label>Gender</label>
            <select
              style={styles.input}
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
          <textarea
            style={styles.textarea}
            name="address"
            placeholder="Address"
            value={formData.address || ''}
            onChange={handleChange}
          />
        </div>

        <div style={styles.row}>
          <div style={styles.field}>
            <label>Country</label>
            <input
              style={styles.input}
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country || ''}
              onChange={handleChange}
            />
          </div>
          <div style={styles.field}>
            <label>City</label>
            <input
              style={styles.input}
              type="text"
              name="city"
              placeholder="City"
              value={formData.city || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div style={styles.btnRow}>
          <button
            style={styles.updateBtn}
            onClick={handleUpdate}>
            Update Employee
          </button>
          <button
            style={styles.cancelBtn}
            onClick={() => navigate('/employee/search')}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5'
  },
  topBar: {
    backgroundColor: '#2c7be5',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: { color: 'white', margin: 0 },
  backBtn: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid white',
    padding: '5px 15px',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  formContainer: {
    backgroundColor: 'white',
    margin: '20px',
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
  updateBtn: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px'
  },
  cancelBtn: {
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px'
  },
  message: {
    color: 'green',
    fontWeight: 'bold',
    marginBottom: '10px'
  }
};

export default EditEmployee;