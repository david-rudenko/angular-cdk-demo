import { Component, Inject, OnInit } from '@angular/core';
import {
  ModalDialogRef,
  MODAL_DATA,
} from 'src/app/services/modal-dialog.service';
// private dialogRef: ModalDialogRef<ConfirmModalComponent>
@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent implements OnInit {
  constructor(@Inject(MODAL_DATA) private data: any) {}

  ngOnInit(): void {}

  closeDialog(confirmed: boolean) {
    // this.dialogRef.close(confirmed);
  }
}
