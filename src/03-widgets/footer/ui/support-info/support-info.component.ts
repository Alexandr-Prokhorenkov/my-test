import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgIconComponent } from '@shared/ui';

@Component({
  selector: 'app-support-info',
  standalone: true,
  imports: [SvgIconComponent, RouterModule],
  templateUrl: './support-info.component.html',
  styleUrl: './support-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupportInfoComponent {}
