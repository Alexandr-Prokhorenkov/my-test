import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AutoSlideService,
  DragSwipeService,
  getSlideTransforms,
  Slide,
  SliderStore,
} from '@shared/index';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SliderStore, AutoSlideService, DragSwipeService],
})
export class SliderComponent implements OnInit, OnDestroy {
  @Input() public slides: Slide[] = [];
  @Input() public staticIndex?: number;
  @Input() public autoSlideInterval = 4000;
  @Input() public enableAutoSlide = true;
  @Input() public enableDrag = true;
  @Input() public dragThreshold = 50;
  @Input() public dragButton = 0;

  @ViewChild('sliderContainer', { static: true })
  private container!: ElementRef<HTMLElement>;

  private readonly transformsSignal = computed(() =>
    getSlideTransforms(
      this.store.currentIndex(),
      this.store.dragOffset(),
      this.store.slides().length,
    ),
  );

  constructor(
    public store: SliderStore,
    private auto: AutoSlideService,
    private drag: DragSwipeService,
  ) {}

  public ngOnInit(): void {
    this.store.resetDrag();
    this.store.setSlides(this.slides);

    if (this.staticIndex !== undefined) {
      this.store.goTo(this.staticIndex);
      return;
    }

    if (this.enableAutoSlide && this.slides.length > 1) {
      this.auto.start(this.autoSlideInterval, () => this.store.next());
    }
  }

  public ngOnDestroy(): void {
    this.auto.stop();
    this.store.setSlides([]);
    this.store.resetDrag();
  }

  public onMouseDown(e: MouseEvent): void {
    if (!this.enableDrag || e.button !== this.dragButton) return;
    this.dragStart(e.clientX);
  }

  public onTouchStart(e: TouchEvent): void {
    if (!this.enableDrag) return;
    this.dragStart(e.touches[0].clientX);
  }

  @HostListener('document:mousemove', ['$event'])
  public onMouseMove(e: MouseEvent): void {
    if (!this.isDragging) return;
    this.store.updateDrag(this.drag.delta(e.clientX));
  }

  @HostListener('document:touchmove', ['$event'])
  public onTouchMove(e: TouchEvent): void {
    if (!this.isDragging) return;
    this.store.updateDrag(this.drag.delta(e.touches[0].clientX));
  }

  @HostListener('document:mouseup')
  public onMouseUp(): void {
    this.dragEnd();
  }

  @HostListener('document:touchend')
  public onTouchEnd(): void {
    this.dragEnd();
  }

  private dragStart(clientX: number): void {
    this.store.startDrag();
    this.drag.begin(clientX);
    this.auto.pause();
    this.container.nativeElement.classList.add('dragging');
  }

  private dragEnd(): void {
    if (!this.isDragging) return;

    const deltaX = this.dragOffset;
    const dir = this.drag.direction(deltaX, this.dragThreshold);

    if (dir === 'left') this.store.next();
    else if (dir === 'right') this.store.prev();

    this.store.resetDrag();
    this.container.nativeElement.classList.remove('dragging');

    if (this.enableAutoSlide && this.staticIndex === undefined) {
      this.auto.resume(this.autoSlideInterval, () => this.store.next());
    }
  }

  public goTo(i: number): void {
    this.store.goTo(i);
    this.auto.pause();
    if (this.enableAutoSlide) {
      this.auto.resume(this.autoSlideInterval, () => this.store.next());
    }
  }

  public get slidesList(): Slide[] {
    return this.store.slides();
  }

  public get currentIndex(): number {
    return this.store.currentIndex();
  }

  public get nextIndex(): number {
    return this.store.nextIndex();
  }

  public get isDragging(): boolean {
    return this.store.isDragging();
  }

  public get dragOffset(): number {
    return this.store.dragOffset();
  }

  public get transformsMap(): Record<number, string | null> {
    return this.transformsSignal();
  }
}
