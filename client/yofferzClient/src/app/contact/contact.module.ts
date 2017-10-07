import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';


@NgModule({
    imports: [
      CommonModule,
      ContactRoutingModule,
      TranslateModule        
    ],
    declarations: [  
      ContactComponent        
    ]
    
})
export class ContactModule {
}
