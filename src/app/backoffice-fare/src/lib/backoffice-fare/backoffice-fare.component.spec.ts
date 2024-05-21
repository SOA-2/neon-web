import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackofficeFareComponent } from './backoffice-fare.component';

describe('BackofficeFareComponent', () => {
  let component: BackofficeFareComponent;
  let fixture: ComponentFixture<BackofficeFareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackofficeFareComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BackofficeFareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
