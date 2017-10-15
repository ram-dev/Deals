import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealsComponent } from './deals.component';
import { DealsListComponent } from './deals-list/deals-list.component';

const routes: Routes = [{
  path: '',
  component: DealsComponent,
  children: [{
    path: 'deals-list',
    component: DealsListComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealsRoutingModule { }

export const routedComponents = [
  DealsComponent,
  DealsListComponent,
];
