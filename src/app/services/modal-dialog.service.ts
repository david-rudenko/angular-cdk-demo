import {
  ComponentType,
  GlobalPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  Injectable,
  InjectionToken,
  Injector,
  OnInit,
  Type,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';

export const MODAL_DATA = new InjectionToken(
  'Modal dialog data injection token'
);

export class ModalDialogRef<TComponent, TData = any> {
  private afterClosed = new Subject<TData | undefined>();
  private backdropClickSub: Subscription;

  instance: TComponent;

  afterClosed$ = this.afterClosed.asObservable();

  constructor(private overlayRef: OverlayRef) {
    this.backdropClickSub = this.overlayRef
      .backdropClick()
      .subscribe(() => this.close());
  }

  close(data?: TData) {
    this.afterClosed.next(data);
    this.backdropClickSub.unsubscribe();
    this.afterClosed.complete();
    this.overlayRef.detach();
  }
}

@Injectable({
  providedIn: 'root',
})
export class ModalDialogService {
  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay) {
    this.initOverlay();
  }

  showDialog<TComponent, TData>(
    contentComponent: ComponentType<TComponent>,
    data?: TData
  ): ModalDialogRef<TComponent, TData> {
    let dialogRef: ModalDialogRef<TComponent, TData> = new ModalDialogRef(
      this.overlayRef
    );

    const injector = Injector.create({
      providers: [
        { provide: MODAL_DATA, useValue: data },
        { provide: ModalDialogRef, useValue: dialogRef },
      ],
    });

    let portal = new ComponentPortal<TComponent>(
      contentComponent,
      undefined,
      injector
    );
    const componentRef = this.overlayRef.attach(portal);
    dialogRef.instance = componentRef.instance;
    return dialogRef;
  }

  private initOverlay() {
    const config: OverlayConfig = {
      hasBackdrop: true,
      backdropClass: 'modal-backdrop',
    };

    const positionStrategy: GlobalPositionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    this.overlayRef = this.overlay.create({
      ...config,
      positionStrategy: positionStrategy,
    });
  }
}
