import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../shared/modules/shared.module';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [NgIf, SharedModule],
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
}
