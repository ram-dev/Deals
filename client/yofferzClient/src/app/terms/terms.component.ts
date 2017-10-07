import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
  animations: [routerTransition()]
})
export class TermsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
