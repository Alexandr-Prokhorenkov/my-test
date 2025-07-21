import { ChangeDetectionStrategy, Component } from '@angular/core';
import { REFERENCES_SLIDER_DATA } from '@shared/config';
import { SliderComponent } from '@shared/ui';

@Component({
  selector: 'app-references-page',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './references-page.component.html',
  styleUrl: './references-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferencesPageComponent {
  public readonly sliderData = REFERENCES_SLIDER_DATA;
}
