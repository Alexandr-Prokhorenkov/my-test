import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@widgets/footer';
import { HeaderComponent } from '@widgets/header';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './layout-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPageComponent {}
