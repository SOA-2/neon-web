import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { HeaderComponent } from '@neon-web/shared';
import { MatSelectModule } from '@angular/material/select';
import { ReservationService } from '../../data-access/reservation/reservation.service';
import { ShowService } from 'src/app/home/src/lib/data-access/show/show.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, MatIconModule, MatDividerModule, RouterLink, ReactiveFormsModule, MatCardModule, MatSelectModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  public paymentForm: FormGroup;
  reserve: any;
  show: any;

  constructor(
    private router: Router,
    private reservationService: ReservationService,
    private showService: ShowService
  ) {
    this.paymentForm = new FormGroup({
      carNumber: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      month: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
      cvv: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.reserve = this.reservationService.getPreReserve();
    this.getShow(this.reserve.show)
  }

  public getShow(id: string): void {
    this.showService.getShow(id).subscribe((res: any) => {
      this.show = res;
    })
  }

  public back() {
    this.router.navigate(['/cart/', this.reserve.show]);
  }

  public checkout() {
    const form: any = {
      reservation: {
        show: this.show,
        user: '1ec53dc8-2e78-4b19-8f9b-f6eaea2acb11',
        date: new Date(Date.now()).toISOString().split('T')[1].split('.')[0],
        total: this.reserve.total,
        status: 1
      },
      seatsReserved: this.reserve.seats.map((seat: any) => {
        return {
          seat,
          price: seat.screen.fare.price
        }
      })
    };
  
    this.reservationService.reserveShow(form).subscribe((res: any) => {
      this.router.navigate(['/']);
    })
  }
}
