import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface MenuItem {
  label: string;
  route: string;
  exact?: boolean;
  linkActiveOptions: { exact: boolean };
}

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNavComponent {
  public readonly menuItems: MenuItem[] = [
    { label: 'Главная', route: '/', exact: true },
    { label: 'О нас', route: '/about' },
    { label: 'Новости', route: '/news' },
    { label: 'Меню справочников', route: '/references' },
    { label: 'Материалы', route: '/materials' },
  ].map(item => ({
    ...item,
    linkActiveOptions: { exact: !!item.exact },
  }));
}
