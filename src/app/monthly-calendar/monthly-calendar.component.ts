import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-monthly-calendar",
  templateUrl: "./monthly-calendar.component.html",
  styleUrls: ["./monthly-calendar.component.scss"]
})
export class MonthlyCalendarComponent implements OnInit {
  _data: any = [];
  _dayNames: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  _monthNames: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  constructor() {}

  ngOnInit() {
    const now = new Date();
    this._data = Array.from(Array(35).keys()).map(i => {
      const obj: any = {};
      const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
      obj.showHeader = i < 7;
      currentMonthStart.setDate(currentMonthStart.getDate() + i);
      if (now.getMonth() !== currentMonthStart.getMonth()) {
        obj.showMonthHeader = true;
        obj.dayOfWeek =
          currentMonthStart.getDate() === 1
            ? this._monthNames[currentMonthStart.getMonth()]
            : "";
      } else {
        obj.dayOfWeek = this._dayNames[currentMonthStart.getDay()];
      }
      obj.date = currentMonthStart;
      return obj;
    });
  }
}
