import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-instrumentation-page',
  standalone: true,
  imports: [],
  templateUrl: './instrumentation-page.component.html',
  styleUrl: './instrumentation-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstrumentationPageComponent {}
