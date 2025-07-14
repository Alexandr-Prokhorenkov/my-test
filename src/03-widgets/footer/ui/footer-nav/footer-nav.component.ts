import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface MenuItem {
  label: string;
  route: string;
  exact?: boolean;
  children?: MenuItem[];
  linkActiveOptions: { exact: boolean };
}

@Component({
  selector: 'app-footer-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer-nav.component.html',
  styleUrl: './footer-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterNavComponent {
  public readonly menuItems: MenuItem[] = [
    {
      label: 'Главная',
      route: '/',
      exact: true,
    },
    {
      label: 'О нас',
      route: '/about',
      children: [
        {
          label: 'Проекты',
          route: '/about/our-projects',
        },
        {
          label: 'Наука',
          route: '/about/scientific-activity',
        },
      ],
    },
    {
      label: 'Новости',
      route: '/news',
    },
    {
      label: 'Меню справочников',
      route: '/references',
      children: [
        {
          label: 'Зарубежные ВВТ',
          route: '/references/foreign-military-equipment',
        },
        {
          label: 'Зарубежные ВС',
          route: '/references/foreign-aircraft',
        },
        {
          label: 'КИП',
          route: '/references/instrumentation',
        },
        {
          label: 'Зарубежные предприятия',
          route: '/references/foreign-companies',
        },
        {
          label: 'Репозиторий зарубежного ПО',
          route: '/references/foreign-software',
        },
        {
          label: 'Элементно-Компонентная База',
          route: '/references/component-database',
        },
      ],
    },
    {
      label: 'Материалы',
      route: '/materials',
    },
  ].map(item => ({
    ...item,
    linkActiveOptions: { exact: !!item.exact },
    children: item.children?.map(child => ({
      ...child,
      linkActiveOptions: { exact: !!(child as MenuItem).exact },
    })),
  }));
}
