import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const TOAST_STATE = {
  success: 'success-toast',
  warning: 'warning-toast',
  danger: 'danger-toast'
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  // The boolean that drives the toast's 'open' vs. 'close' behavior.  
  public showToast$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  // The message string that'll bind and display on the toast. 
  public toastMessage$: BehaviorSubject<string> = new BehaviorSubject<string>('Default Toast Message');

  // The state that will add a style class to the component. 
  public toastState$: BehaviorSubject<string> = new BehaviorSubject<string>(TOAST_STATE.success);

  constructor() { }

  showToast(toastState: string, toastMsg: string): void {

    // This will update the toastState to the toastState passed into the function
    this.toastState$.next(toastState);

    // This updates the toastMessage to the toastMsg passed into the function    ﻿
    this.toastMessage$.next(toastMsg);

    // This will update the showToast trigger to 'true'
    this.showToast$.next(true);
  }

  // This updates the showToast behavioursubject to 'false'  
  dismissToast(): void {
    this.showToast$.next(false);
  }
}
