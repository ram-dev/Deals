import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';


@NgModule({
    imports: [
      CommonModule,
      AboutRoutingModule,
      TranslateModule        
    ],
    declarations: [  
      AboutComponent        
    ]
    
})
export class AboutModule {
}
