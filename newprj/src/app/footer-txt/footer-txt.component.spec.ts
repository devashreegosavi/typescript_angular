import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTxtComponent } from './footer-txt.component';

describe('FooterTxtComponent', () => {
  let component: FooterTxtComponent;
  let fixture: ComponentFixture<FooterTxtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterTxtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
