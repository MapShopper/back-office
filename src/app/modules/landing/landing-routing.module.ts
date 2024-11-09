import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { ProductManagerComponent } from './components/product-manager/product-manager.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { SalesComponent } from './components/sales/sales.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { SalesCrudComponent } from './components/sales/sales-crud/sales-crud.component';
import { SalesAdminastoryComponent } from './components/sales/sales-adminastory/sales-adminastory.component';
import { RoleGuardService } from './shared/services/role-guard.service';

const routes: Routes = [

  {
    path: '', component: LandingComponent,
    data:{
      validRoles:['all']
    },
    children: [
      {
        path: 'product-management', component: ProductManagerComponent,
        canActivate: [RoleGuardService],
        data:{
          animation:'product-management',
          validRoles:['superAdmin','admin','pm']
        }

      },
      {
        path: 'user-management', component: UserManagementComponent,
        canActivate: [RoleGuardService],
        data:{
          animation:'user-management',
          validRoles:['superAdmin','admin','um']
        }

      },
      {
        path: 'sales', component: SalesComponent,
        canActivate: [RoleGuardService],
        data:{
          animation:'sales',
          validRoles:['superAdmin','admin','sales']
        },
        children: [
          {
            path: 'adminastory', component: SalesAdminastoryComponent,
            canActivate: [RoleGuardService],
            data:{
              animation:'adminastory',
              validRoles:['superAdmin',]
            }
          },
          {
            path: 'crud', component: SalesCrudComponent,
            canActivate: [RoleGuardService],
            data:{
              animation:'crud',
              validRoles:['superAdmin']
            }
          }
        ]
      },
      {
        path: 'inventory', component: InventoryComponent,
        canActivate: [RoleGuardService],
        data:{
          animation:'inventory',
          validRoles:['superAdmin','admin']
        }
      }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
