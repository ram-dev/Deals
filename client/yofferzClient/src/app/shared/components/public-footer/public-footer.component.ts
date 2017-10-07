import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-public-footer',
    templateUrl: './public-footer.component.html',
    styleUrls: ['./public-footer.component.scss']
})
export class FooterHeaderComponent implements OnInit {    
    
    constructor(private translate: TranslateService, public router: Router) {
        
    }

    ngOnInit() {}

   
}
