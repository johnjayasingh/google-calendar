import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.scss"]
})
export class DayComponent implements OnInit {
  @Input() day: any = {};
  _active: Boolean;
  _activeDayOfWeek: Boolean;
  _constructor() {}

  ngOnInit() {
    this._active = new Date().getDate() === this.day.date.getDate();
    this._activeDayOfWeek = new Date().getDay() === this.day.date.getDay();
  }
}
