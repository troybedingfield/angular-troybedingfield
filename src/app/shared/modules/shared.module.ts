import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../components/button/button.component';
import { SplitButtonComponent } from '../components/split-button/split-button.component';



@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    SplitButtonComponent
  ],
  exports: [ButtonComponent, SplitButtonComponent]
})
export class SharedModule { }
