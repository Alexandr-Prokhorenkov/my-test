import { Injectable } from '@angular/core';

@Injectable()
export class DragSwipeService {
  private startX = 0;

  public begin(clientX: number): void {
    this.startX = clientX;
  }

  public delta(clientX: number): number {
    return clientX - this.startX;
  }

  public direction(deltaX: number, threshold: number): 'left' | 'right' | 'none' {
    if (Math.abs(deltaX) > threshold) return deltaX > 0 ? 'right' : 'left';
    return 'none';
  }
}
