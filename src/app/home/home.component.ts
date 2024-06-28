import { Component } from '@angular/core';
import { TestButtonComponent } from '../shared/components/test-button/test-button.component';
import { TOAST_STATE, ToastService } from '../shared/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  showFigma: boolean = false;

  showText: string = 'Show'
  hideText: string = 'Hide'

  constructor(private toast: ToastService, private router: Router) { }

  showSection() {
    document.getElementById('figma-container')?.classList.toggle('hide');
  }

  goToDesign() {
    this.router.navigateByUrl('/design');
  }

}
