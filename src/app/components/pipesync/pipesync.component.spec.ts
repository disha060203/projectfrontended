import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesyncComponent } from './pipesync.component';

describe('PipesyncComponent', () => {
  let component: PipesyncComponent;
  let fixture: ComponentFixture<PipesyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipesyncComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipesyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
