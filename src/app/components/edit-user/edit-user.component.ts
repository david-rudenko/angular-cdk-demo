import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('EditUserComponent.ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('EditUserComponent.ngOnDestroy');
  }

}
