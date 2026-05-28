package com.magnus.backend.service;

import com.magnus.backend.entity.Employee;
import com.magnus.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    // GET ALL EMPLOYEES
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // GET ONE EMPLOYEE
    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Employee not found"));
    }

    // CREATE EMPLOYEE
    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    // UPDATE EMPLOYEE
    public Employee updateEmployee(Long id, Employee employee) {
        Employee existing = getEmployeeById(id);
        existing.setFirstName(employee.getFirstName());
        existing.setLastName(employee.getLastName());
        existing.setEmail(employee.getEmail());
        existing.setMobileNumber(employee.getMobileNumber());
        existing.setDateOfBirth(employee.getDateOfBirth());
        existing.setGender(employee.getGender());
        existing.setAddress(employee.getAddress());
        existing.setCountry(employee.getCountry());
        existing.setCity(employee.getCity());
        return employeeRepository.save(existing);
    }

    // DELETE EMPLOYEE
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}
