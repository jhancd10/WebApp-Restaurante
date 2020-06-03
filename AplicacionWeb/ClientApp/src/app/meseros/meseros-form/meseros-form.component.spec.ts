import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeserosFormComponent } from './meseros-form.component';

describe('MeserosFormComponent', () => {
  let component: MeserosFormComponent;
  let fixture: ComponentFixture<MeserosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeserosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeserosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
