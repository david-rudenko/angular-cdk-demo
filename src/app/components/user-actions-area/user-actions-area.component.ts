import { CdkPortalOutlet, ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-user-actions-area',
  templateUrl: './user-actions-area.component.html',
  styleUrls: ['./user-actions-area.component.scss'],
})
export class UserActionsAreaComponent implements OnInit {
  @ViewChild(CdkPortalOutlet)
  private portal: CdkPortalOutlet;

  portalContent$: Observable<ComponentPortal<any>>;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.sidebarContent$.subscribe((x) => {
      this.portal.detach();
      this.portal.attach(x);
    });
    this.sidebarService.isSidebarOpen$.subscribe((x) => {
      if (!x) {
        this.portal.detach();
      }
    });
  }

  closeSidebar(): void {
    this.sidebarService.closeSidebar();
  }
}
