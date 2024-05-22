import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FareService } from '../../data-access/fare/fare.service';

@Component({
  selector: 'app-fare-form',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, MatIconModule, MatDividerModule, ReactiveFormsModule, RouterLink],
  templateUrl: './fare-form.component.html',
  styleUrl: './fare-form.component.scss',
})
export class FareFormComponent {
  @Input() id = '';

  public fareForm: FormGroup;
  title!: string;

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private fareService: FareService
  ) {
    this.fareForm = new FormGroup({
      id: new FormControl({value: '', disabled: true}, Validators.required),
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
  }
  
  ngOnInit(): void {
    this.title = this.id ? 'Editar una tarifa' : 'Crear una tarifa'
    if (this.id) {
      this.getFare();
    }
  }

  private getFare() {
    this.fareService.getFare(this.id).subscribe((res: any) => {
      this.fareForm.patchValue({
        id: res.id,
        name: res.name,
        price: res.price
      });
    })
  }

  public save(): void {
    const {id, name, price} = this.fareForm.getRawValue();

    if (this.id) {
      this.fareService.updateFare({id, name, price}).subscribe((res: any) => {
        this.openSnackBar('Se ha actualizado la tarifa correctamente', 'Entendido');
        this.router.navigate(['/backoffice/fare']);
      })
    } else {
      this.fareService.saveFare({name, price}).subscribe((res: any) => {
        this.openSnackBar('Se ha creado la tarifa correctamente', 'Entendido');
        this.router.navigate(['/backoffice/fare']);
      })
    }
  }

  private openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
