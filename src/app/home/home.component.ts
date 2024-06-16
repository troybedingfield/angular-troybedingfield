import { Component } from '@angular/core';
import { TestButtonComponent } from '../shared/components/test-button/test-button.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  showFigma: boolean = false;

  showText: string = 'Show'
  hideText: string = 'Hide'

  showSection() {
    document.getElementById('figma-container')?.classList.toggle('hide');
  }

}
