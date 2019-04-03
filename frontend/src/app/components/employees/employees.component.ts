import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

//Declarando para el uso de Materialize Toast
declare var M:any;
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers:[
    EmployeeService
  ]
})
export class EmployeesComponent implements OnInit {

  constructor(public employeeService:EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.employeeService.selectedEmployee= new Employee();
    }

  }
  getEmployees(){
    this.employeeService.getEmployees()
    .subscribe(res=>{
      this.employeeService.employees= res as Employee[ ];
      //console.log(res);
    });
  }
  addEmployee(form:NgForm){
    this.employeeService.postEmployee(form.value)
      .subscribe(res=>{
        if (form.value._id) {
          this.employeeService.putEmployee(form.value)
          .subscribe(res=>{
            this.resetForm(form);
          M.toast({
            html: 'Updated Succesfuly'
          });
          this.getEmployees();  
          });
        } else {
          this.resetForm(form);
          M.toast({
            html: 'Save Succesfuly'
          });
          this.getEmployees();  
        }
        
      })
  }
  editEmployee(employee:Employee){
    this.employeeService.selectedEmployee=employee;
    //this.employeeService.putEmployee(employee._id);
  }
  deleteEmployee(_id:string){
    if (confirm('Are you sure?')) {
      this.employeeService.deleteEmployee(_id) 
      .subscribe(res=>{
         M.toast({
            html: 'Deleted Succesfuly'
        });
        this.getEmployees();
            
      });
     
    }
    
  }


}
