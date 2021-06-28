import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapagrupoComponent } from './mapagrupo.component';

describe('MapagrupoComponent', () => {
  let component: MapagrupoComponent;
  let fixture: ComponentFixture<MapagrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapagrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapagrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
