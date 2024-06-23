import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-split-button',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './split-button.component.html',
  styleUrl: './split-button.component.scss'
})
export class SplitButtonComponent {
  dropdownValue: string = '';
  isOpen: 'close' | 'open' | undefined = 'close';
  @Input() label: string = '';
  @Input() color: 'default' | 'secondary' | 'success' | 'warning' | 'error' | 'disabled' | undefined;
  @Input() disabled = false;
  @Input() fill: 'solid' | 'outline' | 'clear' | undefined;
  @Input() size: 'small' | 'medium' | 'large' | undefined;
  @Input() uppercase: true | false = false;
  @Input() maxWidth: number | undefined;
  @Input() minWidth: number | undefined;
  @Input() customBGColor: string | undefined;
  @Input() dropdownItems: string[] | undefined = [];

  @Output() eventValue = new EventEmitter<any>();
  @Output() buttonClick = new EventEmitter<Event>();

  setValue(value: string) {
    this.dropdownValue = value;
    this.isOpen = 'close';
    this.eventValue.emit(value);
  }

  changeStyle($event: any) {
    this.isOpen = $event.type == 'mouseover' ? 'open' : 'close';
  }

  buttonClicked(event: any) {
    this.buttonClick.emit(event);
  }
}
