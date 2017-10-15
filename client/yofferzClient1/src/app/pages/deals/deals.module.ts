import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { DealsRoutingModule, routedComponents } from './deals-routing.module';
import { DealsListService } from '../../@core/data/deals-list.service';

@NgModule({
  imports: [
    ThemeModule,
    DealsRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    routedComponents,
  ],
  providers: [
    DealsListService,
  ],
})
export class DealsModule { }
