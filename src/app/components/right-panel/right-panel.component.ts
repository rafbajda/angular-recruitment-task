import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-right-panel',
  template: `
    <div class="panel-container">
      <span class="panel-title">{{rightPanelTitle}}</span>
      <span class="panel-content" [ngClass]="getPanelContentClass()">
        {{rightNumber}}
      </span>
    </div>
  `,
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent {
  @Input()
  rightPanelTitle: string;

  @Input()
  rightNumber: number;

  getPanelContentClass(): string {
    return !(this.rightNumber % 5) ? 'red-number' : '';
  }
}
