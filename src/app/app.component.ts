import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  sidebarOpen$: Observable<boolean>;
  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarOpen$ = this.sidebarService.isSidebarOpen$;
  }
}
