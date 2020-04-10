import { Component } from '@angular/core';
import {Http} from '@angular/http';
import {Employee} from './employee.model';
import {Customer} from './customer.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private objhttpserv:Http)
  { }
  title = 'webapi';
  //apiValues:string[]=[];
  //list:Employee[];
  list:Customer[];
  //ourapiurl:string='https://localhost:44320/api/Student';
  //ourapiurl:string='https://localhost:44320/api/Employees';
  ourapiurl:string='https://localhost:44320/api/Customers';

  ngOnInit(): void{
    this.objhttpserv.get(this.ourapiurl).subscribe(values=>{
      //this.apiValues=values.json() as string[];
      //this.list=values.json() as Employee[];
      this.list=values.json() as Customer[];


    });
  }
}
