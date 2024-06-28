import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../components/button/button.component';
import { SplitButtonComponent } from '../components/split-button/split-button.component';
import { CarouselComponent } from '../components/carousel/carousel.component';



@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    SplitButtonComponent,
    CarouselComponent
  ],
  exports: [ButtonComponent, SplitButtonComponent, CarouselComponent]
})
export class SharedModule { }
