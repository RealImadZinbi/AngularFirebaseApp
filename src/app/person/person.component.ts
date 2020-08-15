import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit {
 
  

    serverData: JSON;
    employeeData: JSON;
  constructor(private httpClient: HttpClient) {
     
    
  }
  ngOnInit(): void {
    this.httpClient.get('/api').subscribe(data => {
      console.log(data);
    })};

}
 


