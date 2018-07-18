import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-monthly-calendar",
  templateUrl: "./monthly-calendar.component.html",
  styleUrls: ["./monthly-calendar.component.scss"]
})
export class MonthlyCalendarComponent implements OnInit {
  _data: any = [];
  constructor() {}

  ngOnInit() {
    this._data = Array.from(Array(35).keys()).map(i => i + 1);
  }
}
