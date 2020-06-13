import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { LibCompComponent } from './lib-comp/lib-comp.component';

@NgModule({
  declarations: [MyLibComponent, LibCompComponent],
  imports: [
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
