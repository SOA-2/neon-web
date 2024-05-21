import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FareService } from '../../data-access/fare/fare.service';

@Component({
  selector: 'app-fare-list',
  standalone: true,
  imports: [CommonModule, MatButton, MatTableModule, MatIcon, RouterLink],
  templateUrl: './fare-list.component.html',
  styleUrl: './fare-list.component.scss',
})
export class FareListComponent {
  displayedColumns: string[] = ['id', 'name', 'price', 'show', 'delete'];
  dataSource!: any;

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private fareService: FareService
  ) {}

  ngOnInit(): void {
    this.getFares();
  }

  private getFares() {
    this.fareService.getFares().subscribe((res: any) => {
      console.log(res);
    })
  }

  public create(): void {
    this.router.navigate(['/backoffice/fare/form']);
  }

  public delete(id: string): void {
    this.fareService.deleteFare(id).subscribe((res: any) => {
      this.openSnackBar('Se ha eliminado la tarifa correctamente', 'Entendido');
    })
  }

  private openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

}
