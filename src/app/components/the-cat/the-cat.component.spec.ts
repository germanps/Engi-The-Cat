import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCatComponent } from './the-cat.component';

describe('TheCatComponent', () => {
  let component: TheCatComponent;
  let fixture: ComponentFixture<TheCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheCatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
