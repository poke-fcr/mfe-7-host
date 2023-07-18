import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/remote-1/src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any
  dataM2: any
  path: string = '/assets/remote-1/sample.json'
  assetBasePath = environment.assetUrl

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get(this.path).subscribe({

      next: (data: any) => {
        this.data = data
      }
    })

    this.http.get(this.assetBasePath + this.path).subscribe({
      next: (data: any) => {
        this.dataM2 = data
      }
    })
    // throw new Error('Method not implemented.');
  }

}
