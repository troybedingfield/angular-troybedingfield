import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { SharedModule } from '../../shared/modules/shared.module';

@Component({
  selector: 'app-casestudy',
  standalone: true,
  imports: [NgIf, SharedModule],
  templateUrl: './casestudy.component.html',
  styleUrl: './casestudy.component.scss'
})
export class CasestudyComponent {


  caseStudyLink() {
    window.open('https://www.figma.com/design/b22FxF5JXuYgVxqpmv7tKK/Mobile-App?node-id=0-1&t=d45fVoAEGKEd2dgW-1')
  }

}
