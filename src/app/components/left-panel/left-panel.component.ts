import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-left-panel',
  template: `
    <div class="panel-container">
      <span class="panel-title">{{leftPanelTitle}}</span>
      <span class="panel-content" [ngClass]="getPanelContentClass()">
        {{leftNumber}}
      </span>
    </div>
  `,
  styleUrls: ['./left-panel.component.scss'],
})
export class LeftPanelComponent {
  @Input()
  leftPanelTitle: string;

  @Input()
  leftNumber: number;

  getPanelContentClass(): string {
    return !(this.leftNumber % 5) ? 'red-number' : '';
  }
}
