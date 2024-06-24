import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  dropdownValue: string | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  viewResume() {


    if (this.dropdownValue === 'PDF') {
      window.open('./assets/troy-bedingfield-resume.pdf');
    } else if (this.dropdownValue === 'DOC') {
      window.open('./assets/troy-bedingfield-resume.doc');
    }
    else {
      window.open('./assets/troy-bedingfield-resume.pdf');
    }
  }

  handleValue(event: any) {
    this.dropdownValue = event
  }

  handleButton(event: any) {
    if (event.type == 'click' && this.dropdownValue === 'PDF') {
      window.open('./assets/troy-bedingfield-resume.pdf');
    } else if (event.type == 'click' && this.dropdownValue === 'DOC') {
      window.open('./assets/troy-bedingfield-resume.doc');
    }
    else {
      window.open('./assets/troy-bedingfield-resume.pdf');
    }
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

}
