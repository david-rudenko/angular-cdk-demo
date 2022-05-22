import { Component, Inject, OnInit } from '@angular/core';
import {
  ModalDialogRef,
  MODAL_DATA,
} from 'src/app/services/modal-dialog.service';
@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent implements OnInit {
  constructor(
    @Inject(MODAL_DATA) private data: any,
    private dialogRef: ModalDialogRef<ConfirmModalComponent, boolean>
  ) {}

  ngOnInit(): void {}

  closeDialog(confirmed: boolean) {
    this.dialogRef.close(confirmed);
  }
}
