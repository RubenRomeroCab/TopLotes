import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookisComponent } from './cookis.component';

describe('CookisComponent', () => {
  let component: CookisComponent;
  let fixture: ComponentFixture<CookisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
