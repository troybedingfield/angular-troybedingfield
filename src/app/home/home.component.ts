import { Component } from '@angular/core';
import { TestButtonComponent } from '../shared/components/test-button/test-button.component';
import { TOAST_STATE, ToastService } from '../shared/services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  showFigma: boolean = false;

  showText: string = 'Show'
  hideText: string = 'Hide'

  constructor(private toast: ToastService) { }

  showSection() {
    document.getElementById('figma-container')?.classList.toggle('hide');
  }

}
