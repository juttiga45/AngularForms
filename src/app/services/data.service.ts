import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class DataService implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit() {
    return this.http;
    // .get("http://dummy.restapiexample.com/api/v1/employee/1")
    // .subscribe(res => {
    //   console.log(res);
    // });
  }

  createData(success) {
    return this.http
      .get("http://jsonplaceholder.typicode.com/users")
      .subscribe(res => {
        success(res);
      });
  }
}
