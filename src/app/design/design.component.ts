import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../shared/modules/shared.module';
import { CarouselComponent } from '../shared/components/carousel/carousel.component';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [NgIf, SharedModule, CarouselComponent],
  templateUrl: './design.component.html',
  styleUrl: './design.component.scss'
})
export class DesignComponent {
  showDesktopProto: boolean = false;
  showTabletProto: boolean = false;
  showMobileProto: boolean = false;

  showDesktopText: string = 'Show'
  hideDesktopText: string = 'Hide'
  showMobileText: string = 'Show'
  hideMobileText: string = 'Hide'

  constructor() {

  }

  showDesktop() {
    this.showDesktopProto = !this.showDesktopProto
    this.showMobileProto = false
    this.showTabletProto = false
  }
  showMobile() {
    this.showDesktopProto = false
    this.showMobileProto = !this.showMobileProto
    this.showTabletProto = false
  }
  showTablet() {
    this.showDesktopProto = false
    this.showMobileProto = false
    this.showTabletProto = !this.showTabletProto
  }
  designSystemLink() {
    window.open('https://www.figma.com/design/rOj7ptt7KWZOZdNt2cen4n/Design-System?node-id=1-26&t=GDn677E0etS2kMeb-1')
  }
  userFlowLink() {
    window.open('https://www.figma.com/design/JhyHuflMdoV9qNb7tXCyeU/User-Flow?node-id=193-27021&t=FHbdYcUXeDaHUdGM-1')
  }
}
