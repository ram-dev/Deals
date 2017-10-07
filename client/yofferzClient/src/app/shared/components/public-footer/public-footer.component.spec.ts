import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { FooterHeaderComponent } from './public-footer.component';

describe('FooterHeaderComponent', () => {
  let component: FooterHeaderComponent;
  let fixture: ComponentFixture<FooterHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      declarations: [ FooterHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
