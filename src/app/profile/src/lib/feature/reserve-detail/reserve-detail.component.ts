import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import { MatDividerModule } from '@angular/material/divider';

import { HeaderComponent } from '@neon-web/shared';

import { ReservationService } from 'src/app/shopping-cart/src/lib/data-access/reservation/reservation.service';
import { SeatService } from 'src/app/shopping-cart/src/lib/data-access/seat/seat.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-reserve-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MatButtonModule, MatCardModule, RouterLink, QRCodeModule, MatDividerModule, MatIconModule],
  templateUrl: './reserve-detail.component.html',
  styleUrl: './reserve-detail.component.scss',
})
export class ReserveDetailComponent {
  @Input() id = '';

  reserve: any;
  seats: any;

  constructor(
    private reservationService: ReservationService,
    private seatService: SeatService
  ) {}

  ngOnInit(): void {
    this.getShow(this.id);
    this.getSeats(this.id);
  }

  public getShow(id: string): void {
    this.reservationService.getReserve(id).subscribe((res: any) => {
      this.reserve = res;
    })
  }

  public getSeats(id: string): void {
    this.seatService.getSeatsReserved(id).subscribe((res: any) => {
      this.seats = res;
    })
  }
}
