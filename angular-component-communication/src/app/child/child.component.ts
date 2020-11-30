import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() age;
  @Output() plus = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.plus.emit(); // child component가 생성된 직후부터 2초 마다 plus event를 발생시킴.
    }, 2000);
  }

}
