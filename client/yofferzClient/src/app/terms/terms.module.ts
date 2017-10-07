import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { TermsRoutingModule } from './terms-routing.module';
import { TermsComponent } from './terms.component';


@NgModule({
    imports: [
      CommonModule,
      TermsRoutingModule,
      TranslateModule        
    ],
    declarations: [  
      TermsComponent        
    ]    
})
export class TermsModule {
}
