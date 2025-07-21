import { ChangeDetectionStrategy, Component } from '@angular/core';
import { USER_SLIDER_DATA } from '@shared/config';
import { SliderComponent } from '@shared/index';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPageComponent {
  public readonly sliderData = USER_SLIDER_DATA;
}
