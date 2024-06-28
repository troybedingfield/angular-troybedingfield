import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, Input, ViewChild, input } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  currentSlide = 0;

  @Input() images: string[] | undefined = [];
  @Input() captions: string[] | undefined = [];
  @Input() selHeight: number | undefined;
  @Input() automatic: boolean | undefined;
  @Input() interval: number | undefined;


  carouselId: any | undefined;

  constructor() {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.automatic === true) {
      // setInterval(() => { this.onNextClick() }, this.interval)


      this.carouselId = setInterval(() => {

        this.carouselTimer();

      }, this.interval);
    }

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }


  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.images!.length - 1 : previous;
    // console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.images!.length ? 0 : next;
    // console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  dotSelect(n: number) {
    this.currentSlide = n;
  }

  carouselTimer() {
    this.onNextClick()
  }

  pauseCarousel() {
    // console.log('pause');
    if (this.carouselId) {
      clearInterval(this.carouselId);
    }

  }

  restartTimer() {

    // console.log('restart');
    this.pauseCarousel();

    this.carouselId = setInterval(() => {

      return this.carouselTimer();

    }, this.interval);


  }

  ngOnDestroy() {
    if (this.carouselId) {
      clearInterval(this.carouselId);
    }
  }

}
