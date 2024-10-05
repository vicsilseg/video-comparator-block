import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutzVideoModuleComponent } from './cutz-video-module.component';

describe('CutzVideoModuleComponent', () => {
  let component: CutzVideoModuleComponent;
  let fixture: ComponentFixture<CutzVideoModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CutzVideoModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CutzVideoModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
