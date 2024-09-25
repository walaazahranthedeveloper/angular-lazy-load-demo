import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-lazy',
  standalone: true,
  imports: [],
  templateUrl: './lazy.component.html',
  styleUrl: './lazy.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,  // Apply OnPush change detection

})
export class LazyComponent {
  counter = 0;
  constructor(private cdr: ChangeDetectorRef) {}

  // Method to increment the counter
  increment() {
    this.counter++;
    this.cdr.markForCheck();
  }
}
