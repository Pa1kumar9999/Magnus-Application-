package com.magnus.backend.controller;

import com.magnus.backend.entity.Employee;
import com.magnus.backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "*")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    // GET ALL EMPLOYEES
    // URL: GET http://localhost:9090/api/employees
    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    // GET ONE EMPLOYEE
    // URL: GET http://localhost:9090/api/employees/1
    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        return employeeService.getEmployeeById(id);
    }

    // CREATE EMPLOYEE
    // URL: POST http://localhost:9090/api/employees
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    }

    // UPDATE EMPLOYEE
    // URL: PUT http://localhost:9090/api/employees/1
    @PutMapping("/{id}")
    public Employee updateEmployee(
            @PathVariable Long id,
            @RequestBody Employee employee) {
        return employeeService.updateEmployee(id, employee);
    }

    // DELETE EMPLOYEE
    // URL: DELETE http://localhost:9090/api/employees/1
    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        return "Employee deleted successfully!";
    }
}
