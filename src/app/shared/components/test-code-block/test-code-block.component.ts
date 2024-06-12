import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-code-block',
  standalone: true,
  imports: [],
  templateUrl: './test-code-block.component.html',
  styleUrl: './test-code-block.component.scss'
})
export class TestCodeBlockComponent {
  @Input() codeString: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onCopyClick() {
    navigator.clipboard.writeText(this.codeString);
  }
}
