import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeserosDeleteComponent } from './meseros-delete.component';

describe('MeserosDeleteComponent', () => {
  let component: MeserosDeleteComponent;
  let fixture: ComponentFixture<MeserosDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeserosDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeserosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
