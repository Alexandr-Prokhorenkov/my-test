import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, Input, OnInit, signal } from '@angular/core';

interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-main-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainSliderComponent implements OnInit {
  @Input() public staticIndex?: number;

  public slides: Slide[] = [
    {
      title: 'Портал поддержки<br>принятия решений',
      description:
        'Мы объединяем технологии и идеи, чтобы создавать решения, которые вдохновляют, упрощают и расширяют возможности. Погрузитесь в мир, где каждый клик — это шаг к новым возможностям. ',
      image: 'assets/images/slide-1.png',
    },
    {
      title: 'Справочники',
      description:
        'Мы объединяем технологии и идеи, чтобы создавать решения, которые вдохновляют, упрощают и расширяют возможности. Погрузитесь в мир, где каждый клик — это шаг к новым возможностям. ',
      image: 'assets/images/slide-2.png',
    },
    {
      title: 'Новости',
      description:
        'Мы объединяем технологии и идеи, чтобы создавать решения, которые вдохновляют, упрощают и расширяют возможности. Погрузитесь в мир, где каждый клик — это шаг к новым возможностям. ',
      image: 'assets/images/slide-3.png',
    },
    {
      title: 'Материалы',
      description:
        'Мы объединяем технологии и идеи, чтобы создавать решения, которые вдохновляют, упрощают и расширяют возможности. Погрузитесь в мир, где каждый клик — это шаг к новым возможностям. ',
      image: 'assets/images/slide-4.png',
    },
  ];

  public currentIndex = signal(0);
  private timer?: ReturnType<typeof setInterval>;
  public nextIndex = computed(() => {
    return (this.currentIndex() + 1) % this.slides.length;
  });

  public ngOnInit(): void {
    if (this.staticIndex !== undefined) {
      this.currentIndex.set(this.staticIndex);
    } else {
      this.startAutoSlide();
    }
  }

  public startAutoSlide(): void {
    this.timer = setInterval(() => {
      const next = (this.currentIndex() + 1) % this.slides.length;
      this.currentIndex.set(next);
    }, 4000);
  }

  public goToSlide(index: number): void {
    this.currentIndex.set(index);
    if (!this.staticIndex) {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.startAutoSlide();
    }
  }

  public get currentIndexValue(): number {
    return this.currentIndex();
  }

  public get nextIndexValue(): number {
    return this.nextIndex();
  }
}
