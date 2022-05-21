import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MainContentComponent } from './components/main-content/main-content.component';
import { UserActionsAreaComponent } from './components/user-actions-area/user-actions-area.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { PortalModule } from '@angular/cdk/portal';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import {MatCardModule} from '@angular/material/card';

import { OverlayModule } from '@angular/cdk/overlay';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [AppComponent, MainContentComponent, UserActionsAreaComponent, EditUserComponent, DeleteUserComponent, ConfirmModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    PortalModule,
    OverlayModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
