import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UserService } from 'src/app/services/user.service';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  columns = ['name', 'position', 'department', 'edit'];

  users$: Observable<UserModel[]>;

  constructor(
    private userService: UserService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

  openDeleteSidebar(user: UserModel): void {
    this.sidebarService.openSidebar(DeleteUserComponent, {
      username: user.name,
    });
  }

  openEditSidebar(): void {
    this.sidebarService.openSidebar(EditUserComponent);
  }
}
