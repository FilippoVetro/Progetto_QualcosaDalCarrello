import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-refund-cause',
  templateUrl: './refund-cause.component.html',
  styleUrls: ['./refund-cause.component.css']
})
export class RefundCauseComponent {
  refundCause: string;
  @Output() causeSelected = new EventEmitter<string>();

  selectCause(cause: string) {
    this.refundCause = cause;
    this.causeSelected.emit(cause);
  }
}
