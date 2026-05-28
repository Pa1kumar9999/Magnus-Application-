import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  getAllEmployees, 
  searchEmployees,
  deleteEmployee,
  getEmployeeById
} from '../services/api';

function SearchEmployee() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  // Load all employees when page opens
  useEffect(() => {
    fetchAllEmployees();
  }, []);

  const fetchAllEmployees = async () => {
    try {
      const response = await getAllEmployees();
      setEmployees(response.data);
    } catch (err) {
      setMessage('Error loading employees!');
    }
  };

  const handleSearch = async () => {
    try {
      const response = await getAllEmployees();
      const filtered = response.data.filter(emp => {
        const fullName = 
          `${emp.firstName} ${emp.lastName}`
          .toLowerCase();
        const searchName = name.toLowerCase();
        const searchMobile = mobile.toLowerCase();
        return (
          (name === '' || fullName.includes(searchName)) &&
          (mobile === '' || 
            emp.mobileNumber.includes(searchMobile))
        );
      });
      setEmployees(filtered);
    } catch (err) {
      setMessage('Error searching!');
    }
  };

  const handleClear = () => {
    setName('');
    setMobile('');
    fetchAllEmployees();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure to delete?')) {
      try {
        await deleteEmployee(id);
        setMessage('Employee deleted successfully!');
        fetchAllEmployees();
      } catch (err) {
        setMessage('Error deleting employee!');
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/employee/edit/${id}`);
  };

  return (
    <div style={styles.container}>

      {/* Top Bar */}
      <div style={styles.topBar}>
        <h2 style={styles.logo}>Magnus</h2>
        <button style={styles.backBtn}
          onClick={() => navigate('/home')}>
          Back to Home
        </button>
      </div>

      {/* Search Section */}
      <div style={styles.searchContainer}>
        <h3>Search Employee</h3>

        {message && (
          <p style={styles.message}>{message}</p>
        )}

        <div style={styles.searchRow}>
          <input
            style={styles.searchInput}
            type="text"
            placeholder="Employee Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            style={styles.searchInput}
            type="text"
            placeholder="Mobile No"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <button style={styles.searchBtn}
            onClick={handleSearch}>
            Search
          </button>
          <button style={styles.clearBtn}
            onClick={handleClear}>
            Clear
          </button>
          <button style={styles.addBtn}
            onClick={() => navigate('/employee/create')}>
            Add Employee
          </button>
        </div>

        {/* Table */}
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th style={styles.th}>First Name</th>
              <th style={styles.th}>Last Name</th>
              <th style={styles.th}>Mobile No</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Gender</th>
              <th style={styles.th}>Birth Date</th>
              <th style={styles.th}>Country</th>
              <th style={styles.th}>City</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} style={styles.tableRow}>
                <td style={styles.td}>
                  {emp.firstName}
                </td>
                <td style={styles.td}>
                  {emp.lastName}
                </td>
                <td style={styles.td}>
                  {emp.mobileNumber}
                </td>
                <td style={styles.td}>
                  {emp.email}
                </td>
                <td style={styles.td}>
                  {emp.gender}
                </td>
                <td style={styles.td}>
                  {emp.dateOfBirth}
                </td>
                <td style={styles.td}>
                  {emp.country}
                </td>
                <td style={styles.td}>
                  {emp.city}
                </td>
                <td style={styles.td}>
                  <button
                    style={styles.editBtn}
                    onClick={() => handleEdit(emp.id)}>
                    Edit
                  </button>
                  <button
                    style={styles.deleteBtn}
                    onClick={() => handleDelete(emp.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {employees.length === 0 && (
          <p style={styles.noData}>
            No employees found!
          </p>
        )}

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
  searchContainer: {
    backgroundColor: 'white',
    margin: '20px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  searchRow: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    flexWrap: 'wrap'
  },
  searchInput: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
    width: '200px'
  },
  searchBtn: {
    padding: '8px 15px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  clearBtn: {
    padding: '8px 15px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  addBtn: {
    padding: '8px 15px',
    backgroundColor: '#2c7be5',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px'
  },
  tableHeader: {
    backgroundColor: '#2c7be5',
    color: 'white'
  },
  th: {
    padding: '10px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd'
  },
  tableRow: {
    borderBottom: '1px solid #eee'
  },
  td: {
    padding: '10px',
    fontSize: '14px'
  },
  editBtn: {
    padding: '5px 10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '5px'
  },
  deleteBtn: {
    padding: '5px 10px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  message: {
    color: 'green',
    fontWeight: 'bold'
  },
  noData: {
    textAlign: 'center',
    color: 'gray',
    marginTop: '20px'
  }
};

export default SearchEmployee;