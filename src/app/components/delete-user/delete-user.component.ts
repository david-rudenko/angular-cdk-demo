import { Component, Inject, OnInit } from '@angular/core';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';
import { SIDEBAR_DATA } from 'src/app/services/sidebar.service';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
})
export class DeleteUserComponent implements OnInit {
  constructor(
    @Inject(SIDEBAR_DATA) public data: any,
    private dialogService: ModalDialogService
  ) {}

  ngOnInit(): void {}

  openConfirmation() {
    let dialogRef = this.dialogService.showDialog(ConfirmModalComponent);
    dialogRef.afterClosed$.subscribe((x) => console.log(x));
  }
}
