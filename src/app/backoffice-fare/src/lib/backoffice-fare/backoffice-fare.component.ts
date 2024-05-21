import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '@neon-web/shared';

@Component({
  selector: 'lib-backoffice-fare',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './backoffice-fare.component.html',
  styleUrl: './backoffice-fare.component.scss',
})
export class BackofficeFareComponent {}
