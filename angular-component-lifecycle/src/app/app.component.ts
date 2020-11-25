import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-component-lifecycle';
  obj = {
    num: 0
  };

  plus() {
    this.obj.num++;
  }
}
