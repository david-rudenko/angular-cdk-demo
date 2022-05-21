import { ComponentPortal, ComponentType, Portal } from '@angular/cdk/portal';
import { Injectable, InjectionToken, Injector } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

export const SIDEBAR_DATA = new InjectionToken('Sidebar data injection token');

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isSidebarOpen = new Subject<boolean>();
  private sidebarContent = new Subject<ComponentPortal<any>>();

  isSidebarOpen$ = this.isSidebarOpen.asObservable();
  sidebarContent$ = this.sidebarContent.asObservable();
  constructor() {}

  openSidebar<TComponent>(
    contentComponent: ComponentType<TComponent>,
    data?: any
  ) {
    let portal: ComponentPortal<TComponent>;
    const injector = Injector.create({
      providers: [{ provide: SIDEBAR_DATA, useValue: data }],
    });
    portal = new ComponentPortal(contentComponent, null, injector);
    this.sidebarContent.next(portal);
    this.isSidebarOpen.next(true);
  }

  closeSidebar() {
    this.isSidebarOpen.next(false);
  }
}
