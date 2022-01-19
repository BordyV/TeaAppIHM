import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaFormComponent } from './tea-form.component';

describe('TeaFormComponent', () => {
  let component: TeaFormComponent;
  let fixture: ComponentFixture<TeaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
