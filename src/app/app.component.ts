import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resumeBuilder';
  pinMenu = false;

  togglePin(): void {
    this.pinMenu = !this.pinMenu;
  }
}
