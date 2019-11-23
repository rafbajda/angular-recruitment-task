import { Injectable } from '@angular/core';
import {interval} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanelService {
  leftPanelTitle = 'Left panel title';
  rightPanelTitle = 'Right panel title';

  getNumber() {
    return interval(1000);
  }

  isEvenNumber = (nmb: number) => !(nmb % 2);
}
