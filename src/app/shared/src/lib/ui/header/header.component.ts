import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';

interface City {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, MatToolbarModule, RouterLink, MatSelectModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  city = '1';
  cities: City[] = [
    {value: '1', viewValue: 'Medellin'},
    {value: '2', viewValue: 'Bogota'},
    {value: '3', viewValue: 'Cali'},
  ];
}
