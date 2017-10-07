import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';

import { StatModule } from '../shared';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
    imports: [
      CommonModule,
      HomeRoutingModule,
      NgbCarouselModule.forRoot(),
      TranslateModule,
      StatModule       
    ],
    declarations: [  
      HomeComponent        
    ]
    
})
export class HomeModule {
}
