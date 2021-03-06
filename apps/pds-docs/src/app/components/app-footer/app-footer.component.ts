import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pds-app-footer',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['app-footer.component.scss'],
  template: `
    <div class="app-legal-links">
      <a routerLink="/imprint">Imprint</a>
      <a routerLink="/privacy">Privacy</a>
    </div>
    <div class="app-love-indicator">
      made with
      <span>❤</span>
      in Germany
    </div>
    <div class="app-legal-claims small">
      <span>&copy; vitagroup AG 2020-2021</span>
      &mdash;
      <span>
        licensed under
        <strong>Apache-2.0</strong>
      </span>
    </div>
  `,
})
export class AppFooterComponent {}
