import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarpaqueteComponent } from './generarpaquete.component';

describe('GenerarpaqueteComponent', () => {
  let component: GenerarpaqueteComponent;
  let fixture: ComponentFixture<GenerarpaqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarpaqueteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarpaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
