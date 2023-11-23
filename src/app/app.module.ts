import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NgZorroAntdModule } from './ant-design/ant-design.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminSidebarComponent } from './pages/admin/admin-sidebar/admin-sidebar.component';
import { AdminMotelRoomComponent } from './pages/admin/admin-motel-room/admin-motel-room.component';
import { AdminRentalContractComponent } from './pages/admin/admin-rental-contract/admin-rental-contract.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { ModalAdminCreateRoomComponent } from './pages/admin/modal/modal-admin-create-room/modal-admin-create-room.component';
import { AdminRoomDetailComponent } from './pages/admin/admin-room-detail/admin-room-detail.component';
import { CustomerRentalRoomComponent } from './pages/admin/custormer-rental-room/custormer-rental-room.component';
import { ModalAdminCreateClientComponent } from './pages/admin/modal/modal-admin-create-client/modal-admin-create-client.component';
import { AdminClientListComponent } from './pages/admin/admin-client-list/admin-client-list.component';
import { ModalAdminUpdateRoomComponent } from './pages/admin/modal/modal-admin-update-room/modal-admin-update-room.component';
import { ModalAdminUpdateClientComponent } from './pages/admin/modal/modal-admin-update-client/modal-admin-update-client.component';
import { AdminServiceListComponent } from './pages/admin/admin-service-list/admin-service-list.component';
import { ModalAdminCreateServiceComponent } from './pages/admin/modal/modal-admin-create-service/modal-admin-create-service.component';
import { ModalAdminUpdateServiceComponent } from './pages/admin/modal/modal-admin-update-service/modal-admin-update-service.component';
import { AdminMonthBillComponent } from './pages/admin/admin-month-bill/admin-month-bill.component';
import { AdminBillDetailComponent } from './pages/admin/admin-bill-detail/admin-bill-detail.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    PageNotFoundComponent,
    AdminSidebarComponent,
    AdminMotelRoomComponent,
    AdminRentalContractComponent,
    AdminDashboardComponent,
    ModalAdminCreateRoomComponent,
    AdminRoomDetailComponent,
    CustomerRentalRoomComponent,
    ModalAdminCreateClientComponent,
    AdminClientListComponent,
    ModalAdminUpdateRoomComponent,
    ModalAdminUpdateClientComponent,
    AdminServiceListComponent,
    ModalAdminCreateServiceComponent,
    ModalAdminUpdateServiceComponent,
    AdminMonthBillComponent,
    AdminBillDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
