import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandPaComponent } from './grand-pa.component';

describe('GrandPaComponent', () => {
  let component: GrandPaComponent;
  let fixture: ComponentFixture<GrandPaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandPaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandPaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
