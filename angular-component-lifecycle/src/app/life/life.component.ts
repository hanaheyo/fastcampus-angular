import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input() obj;

  constructor() {
    console.log("constructor", this.obj);
   }

  ngOnInit() {
    console.log("ngOnInit", this.obj);
  }

  ngOnChanges() {
    console.log("ngOnChanges", this.obj);
  }

  ngDoCheck() {
    console.log("ngDoCheck", this.obj);
  }

  ngOnDestroy() {
    console.log('');
  }
}
