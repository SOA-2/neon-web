import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FareDetailComponent } from './fare-detail.component';

describe('FareDetailComponent', () => {
  let component: FareDetailComponent;
  let fixture: ComponentFixture<FareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FareDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
