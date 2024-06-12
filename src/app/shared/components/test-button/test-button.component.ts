import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TestCodeBlockComponent } from '../test-code-block/test-code-block.component';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-test-button',
  standalone: true,
  imports: [TestCodeBlockComponent, FormsModule, SharedModule],
  templateUrl: './test-button.component.html',
  styleUrl: './test-button.component.scss'
})
export class TestButtonComponent implements OnInit {
  value: '' | undefined;
  label: string = 'Button';
  color: 'default' | 'success' | 'warning' | 'error' = 'default';
  disabled = false;
  fill: 'solid' | 'outline' | 'clear' = 'solid';
  size: 'small' | 'medium' | 'large' = 'medium';
  uppercase: true | false = false;
  maxWidth: number | undefined;

  consoleText: string = '';
  codeString: string = '';

  constructor() { }

  ngOnInit(): void {
    this.updateCodeString()
  }

  onChange() {
    this.updateCodeString();
  }

  updateCodeString() {
    this.codeString = '<library-button';

    if (this.color != 'default') {
      this.codeString += ` color="${this.color}"`;
    }
    if (this.fill != 'solid') {
      this.codeString += ` [fill]=" ${this.fill} "`;
    }
    if (this.size != 'medium') {
      this.codeString += ` [size]="${this.size}"`;
    }

    if (this.uppercase) {
      this.codeString += ` [uppercase]="${this.uppercase}"`;
    }

    if (this.disabled) {
      this.codeString += ` [disabled]="${this.disabled}"`;
    }


    this.codeString += '>';
    if (this.label != '') {
      this.codeString += `${this.label}`;
    }
    this.codeString += '</library-button>';
  }
}
