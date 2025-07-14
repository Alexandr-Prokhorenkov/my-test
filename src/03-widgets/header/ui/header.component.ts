import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgIconComponent } from '@shared/index';

import { HeaderNavComponent } from './header-nav/header-nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SvgIconComponent, RouterModule, HeaderNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
