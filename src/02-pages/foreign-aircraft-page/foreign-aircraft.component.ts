import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-foreign-aircraft',
  standalone: true,
  imports: [],
  templateUrl: './foreign-aircraft.component.html',
  styleUrl: './foreign-aircraft.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForeignAircraftPageComponent {}
