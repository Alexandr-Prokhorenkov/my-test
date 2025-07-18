import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsPageComponent {}
