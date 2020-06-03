import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeserosComponent } from './meseros.component';

describe('MeserosComponent', () => {
  let component: MeserosComponent;
  let fixture: ComponentFixture<MeserosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeserosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeserosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
