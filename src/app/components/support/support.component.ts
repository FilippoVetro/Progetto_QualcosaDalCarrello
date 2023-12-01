import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {
  submitRequestAssistance(formValue: any): void {
    console.log(formValue);
  }

  submitComplaint(formValue: any): void {
    console.log(formValue);
  }
}

