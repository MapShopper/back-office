import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { ProductManagerComponent } from './components/product-manager/product-manager.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { SalesComponent } from './components/sales/sales.component';
import { SalesCrudComponent } from './components/sales/sales-crud/sales-crud.component';
import { SalesAdminastoryComponent } from './components/sales/sales-adminastory/sales-adminastory.component';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PanelModule } from 'primeng/panel';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LandingComponent,
    ProductManagerComponent,
    UserManagementComponent,
    InventoryComponent,
    SalesComponent,
    SalesCrudComponent,
    SalesAdminastoryComponent,
    SidebarComponent,
    
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SidebarModule,
    PanelModule,
    PasswordModule,
    FormsModule
  ],
  providers: [
    // provideAnimations()
  ]
})
export class LandingModule { }
