import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { PrivacyPolicyRoutingModule } from './privacy-policy-routing.module';
import { PrivacyPolicyComponent } from './privacy-policy.component';


@NgModule({
    imports: [
      CommonModule,
      PrivacyPolicyRoutingModule,
      TranslateModule        
    ],
    declarations: [  
      PrivacyPolicyComponent        
    ]
    
})
export class PrivacyPolicyModule {
}
