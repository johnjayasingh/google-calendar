import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule],
  exports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule],
  providers: []
})
export class MaterialModule {}
