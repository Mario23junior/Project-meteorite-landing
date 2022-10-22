import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoriteComponent } from './meteorite.component';

describe('MeteoriteComponent', () => {
  let component: MeteoriteComponent;
  let fixture: ComponentFixture<MeteoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeteoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
