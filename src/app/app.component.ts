import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angualr-basic-component';

  click = () => {
    this.title = '자식으로부터 실행됨';
  }
}
