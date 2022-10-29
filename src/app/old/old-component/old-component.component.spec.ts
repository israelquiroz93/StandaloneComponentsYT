import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldComponentComponent } from './old-component.component';

describe('OldComponentComponent', () => {
  let component: OldComponentComponent;
  let fixture: ComponentFixture<OldComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
