import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'tb-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() label: string = '';
  @Input() color: 'default' | 'secondary' | 'success' | 'warning' | 'error' | 'disabled' | undefined;
  @Input() disabled = false;
  @Input() fill: 'solid' | 'outline' | 'clear' | undefined;
  @Input() size: 'small' | 'medium' | 'large' | undefined;
  @Input() uppercase: true | false = false;
  @Input() maxWidth: number | undefined;
  @Input() minWidth: number | undefined;
  @Input() customBGColor: string | undefined;
}
