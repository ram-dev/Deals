import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { PublicHeaderComponent, FooterHeaderComponent } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        CoreRoutingModule,
        TranslateModule
    ],
    declarations: [
        CoreComponent,
        PublicHeaderComponent,
        FooterHeaderComponent,
    ]
})
export class CoreModule { }