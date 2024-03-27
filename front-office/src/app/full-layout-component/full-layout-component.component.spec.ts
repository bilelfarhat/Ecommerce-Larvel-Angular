import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLayoutComponentComponent } from './full-layout-component.component';

describe('FullLayoutComponentComponent', () => {
  let component: FullLayoutComponentComponent;
  let fixture: ComponentFixture<FullLayoutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullLayoutComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLayoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
