import axios from 'axios';

const BASE_URL = 'http://localhost:9090/api';

// LOGIN
export const loginUser = (credential, password) => {
  return axios.post(`${BASE_URL}/auth/login`, {
    credential, password
  });
};

// GET ALL EMPLOYEES
export const getAllEmployees = () => {
  return axios.get(`${BASE_URL}/employees`);
};

// GET ONE EMPLOYEE
export const getEmployeeById = (id) => {
  return axios.get(`${BASE_URL}/employees/${id}`);
};

// CREATE EMPLOYEE
export const createEmployee = (data) => {
  return axios.post(`${BASE_URL}/employees`, data);
};

// UPDATE EMPLOYEE
export const updateEmployee = (id, data) => {
  return axios.put(`${BASE_URL}/employees/${id}`, data);
};

// DELETE EMPLOYEE
export const deleteEmployee = (id) => {
  return axios.delete(`${BASE_URL}/employees/${id}`);
};