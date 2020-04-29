import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styleUrls: ["./data.component.css"]
})
export class DataComponent implements OnInit {
  userdata = [];
  constructor(private ser: DataService) {}

  ngOnInit(): void {}
  onSubmit() {
    console.log("ok");
    this.ser.createData(data => {
      console.log(data);
      this.userdata = data;
    });
  }
}
