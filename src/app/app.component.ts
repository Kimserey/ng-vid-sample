import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-first-application';
  name: string;
  
  constructor(private http: HttpClient) { }

  click() {
    $('#myButton').button('toggle');
  }
  
  ngOnInit() {
    this.http.get<string>('/api')
      .subscribe(name => {
        this.name = name;
      });
  }
}
