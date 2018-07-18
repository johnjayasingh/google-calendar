import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MaterialModule } from './material';
import { MonthlyCalendarComponent } from './monthly-calendar/monthly-calendar.component';

@NgModule({
  declarations: [AppComponent, CalendarComponent, MonthlyCalendarComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
