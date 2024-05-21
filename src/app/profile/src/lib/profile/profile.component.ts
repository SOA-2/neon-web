import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { HeaderComponent } from '@neon-web/shared';
import { AuthService } from 'src/app/log-in/src/lib/data-access/auth/auth.service';
import { ReservationService } from 'src/app/shopping-cart/src/lib/data-access/reservation/reservation.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'lib-profile',
  standalone: true,
  imports: [CommonModule, MatButton, HeaderComponent, MatTableModule, MatIcon, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  displayedColumns: string[] = ['id', 'date', 'time', 'name', 'total', 'show'];
  dataSource!: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private reservationService: ReservationService,
  ) {}

  ngOnInit(): void {
    this.getReserves('1ec53dc8-2e78-4b19-8f9b-f6eaea2acb11');
  }

  public logOut(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  private getReserves(id: string): void {
    this.reservationService.getUserReserves(id).subscribe((res: any) => {
      this.dataSource = res;
    })
  }

}
