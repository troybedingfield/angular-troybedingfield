import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgIf, BrowserAnimationsModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  animations: [
    trigger('toastTrigger', [ // This refers to the @trigger we created in the template      
      state('open', style({ transform: 'translatex(0%)' })), // This is how the 'open' state is styled      
      state('close', style({ transform: 'translatex(200%)' })), // This is how the 'close' state is styled      
      transition('open <=> close', [ // This is how they're expected to transition from one to the other         
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class ToastComponent {
  toastClass: string[] = [];
  toastMessage: string = '';
  showToast: boolean | undefined;

  constructor(public toast: ToastService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  dismiss(): void {
    this.toast.dismissToast();
  }

}
