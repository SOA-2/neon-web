import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReserveDetailComponent } from './reserve-detail.component';

describe('ReserveDetailComponent', () => {
  let component: ReserveDetailComponent;
  let fixture: ComponentFixture<ReserveDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReserveDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReserveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
