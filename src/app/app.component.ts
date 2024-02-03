import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularWithDatatables';
  dtOptions: DataTables.Settings = {};
  

  members = [
    { name: "John", age: 25, email: "john@example.com" },
    { name: "Jane", age: 30, email: "jane@example.com" },
    { name: "Sam", age: 35, email: "sam@example.com" },
    { name: "Sam", age: 35, email: "sam@example.com" },
    { name: "Sam", age: 35, email: "sam@example.com" },
    { name: "Sam", age: 35, email: "sam@example.com" },
    { name: "Sam", age: 35, email: "sam@example.com" },
    { name: "Sam", age: 35, email: "sam@example.com" },
    { name: "Sam", age: 35, email: "sam@example.com" },
    { name: "Sam", age: 35, email: "sam@example.com" },
    { name: "Sam", age: 35, email: "sam@example.com" },
    // Add more members here...
  ];
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 7
    };
  }
}
