import { Component, ViewEncapsulation } from '@angular/core';
import { AppGuidesService } from '../../services/app-guides.service';

@Component({
  selector: 'pds-app-guides-page',
  templateUrl: 'app-guides-page.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppGuidesPageComponent {
  constructor(readonly appGuides: AppGuidesService) {}
}
