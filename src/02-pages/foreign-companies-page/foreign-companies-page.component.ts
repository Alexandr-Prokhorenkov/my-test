import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-foreign-companies-page',
  standalone: true,
  imports: [],
  templateUrl: './foreign-companies-page.component.html',
  styleUrl: './foreign-companies-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForeignCompaniesPageComponent {}
