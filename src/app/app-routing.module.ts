import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryListActiveComponent } from './components/delivery-list-active/delivery-list-active.component';
import { DeliveryListCompletedComponent } from './components/delivery-list-completed/delivery-list-completed.component';
import { DeliveryCreateComponent } from './components/delivery-create/delivery-create.component';
import { DeliveryDetailComponent } from './components/delivery-detail/delivery-detail.component';
import { DeliveryUpdateComponent } from './components/delivery-update/delivery-update.component';


const routes: Routes = [
  { path: '',
    redirectTo: 'deliveries/active',
    pathMatch: 'full'
  },
  {
    path: 'deliveries/create',
    component: DeliveryCreateComponent,
    data: { title: 'Create delivery' }
  },
  {
    path: 'deliveries/active',
    component: DeliveryListActiveComponent,
    data: { title: 'Active deliveries' }
  },
  {
    path: 'deliveries/completed',
    component: DeliveryListCompletedComponent,
    data: { title: 'Completed deliveries' }
  },
  {
    path: 'deliveries/:id/edit',
    component: DeliveryUpdateComponent,
  },
  {
    path: 'deliveries/:id',
    component: DeliveryDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
