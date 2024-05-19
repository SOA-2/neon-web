import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from '@neon-web/shared';

import { ShowService } from 'src/app/home/src/lib/data-access/show/show.service';
import { SeatService } from '../data-access/seat/seat.service';
import { ReservationService } from '../data-access/reservation/reservation.service';

export interface Seat {
  id: string;
  letter: string;
  number: string;
  screen: any;
  selected: boolean;
  taken?: boolean;
}

export type Seats = Array<Seat>

@Component({
  selector: 'lib-shopping-cart',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MatCardModule, MatButtonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  @Input() id = '';

  show!: any;
  total: any;
  seats!: Array<any>;
  allSeats!: Array<any>;
  filledSeats!: Array<any>;

  constructor(
    private showService: ShowService,
    private seatService: SeatService,
    private reservationService: ReservationService,
    private router: Router
  ) {
    this.total = 0;
  }

  ngOnInit(): void {
    this.getShow(this.id);
  }

  public getShow(id: string): void {
    this.showService.getShow(id).subscribe((res: any) => {
      this.show = res;
      this.getSeats(this.show.screen.id)
    })
  }

  public getSeats(id: string): void {
    this.seatService.getSeatsByScreenId(id).subscribe((res: any) => {
      this.allSeats = res;
      this.getSeatsReserved(this.show.id);
    })
  }

  public getSeatsReserved(id: string): void {
    this.seatService.getSeatsReservedByShowId(id).subscribe((res: any) => {
      this.filledSeats = res;
      this.fillSeats();
      this.formatSeats();
    })
  }

  fillSeats(): void {
    for (const seat of this.allSeats) {
      seat.taken = this.filledSeats.some((filled) => filled.seat.id === seat.id);
    }
  }

  formatSeats() {
    this.seats = this.allSeats.reduce((r: any, seat: any) => {
      r[seat.letter] = [...r[seat.letter] || [], seat];
      return r;
    }, {})
  }

  public selectSeat(seat: any): void {
    seat.selected = !seat.selected
    this.calcTotal();
  }

  calcTotal(): void {
    this.total = 0;
    for (const key in this.seats) {
      for (const seat of this.seats[key]) {
        if (seat.selected) {
          this.total += this.show.screen.fare.price;
        }
      }
    }
  }

  public preRerserve() {
    const seatsSelected = [];

    for (const key in this.seats) {
      for (const seat of this.seats[key]) {
        if (seat.selected) {
          seatsSelected.push(seat);
        }
      }
    }

    this.reservationService.preReserve({
      show: this.id,
      seats: seatsSelected,
      total: this.total
    });

    this.router.navigate(['/cart/checkout/payment']);
  }
}
