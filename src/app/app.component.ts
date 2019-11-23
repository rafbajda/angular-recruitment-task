import {Component, OnInit} from '@angular/core';
import {PanelService} from './services/panel.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <span class="container-title">
        {{title}}
      </span>
      <div class="container-panels">
        <app-left-panel [leftPanelTitle]="panelService.leftPanelTitle" [leftNumber]="leftNumber"></app-left-panel>
        <app-right-panel [rightPanelTitle]="panelService.rightPanelTitle" [rightNumber]="rightNumber"></app-right-panel>
      </div>
      <div class="container-list">
        <app-list></app-list>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string = 'Review junior\'s code';
  public leftNumber: number;
  public rightNumber: number;

  constructor(private panelService: PanelService) {}

  ngOnInit() {
    this.panelService.getNumber().subscribe(number => {
      if (this.panelService.isEvenNumber(number)) {
        this.leftNumber = number;
      } else {
        this.rightNumber = number;
      }
    });
  }
}
