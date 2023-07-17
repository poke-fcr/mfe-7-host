import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any
  path: string = './assets/remote-1/sample.json'
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get(this.path).subscribe({

      next: (data: any) => {
        this.data = data
      }
    })
    // throw new Error('Method not implemented.');
  }

}
