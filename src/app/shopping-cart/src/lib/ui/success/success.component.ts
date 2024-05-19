import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';
import { RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { HeaderComponent } from '@neon-web/shared';
import { ReservationService } from '../../data-access/reservation/reservation.service';
import { SeatService } from '../../data-access/seat/seat.service';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MatButtonModule, MatCardModule, RouterLink, QRCodeModule, MatDividerModule],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss',
})
export class SuccessComponent {
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
