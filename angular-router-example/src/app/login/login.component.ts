import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.queryParamMap.subscribe(data => {
    //   console.log(data.get('url'));
    //   this.url = data.get('url');
    // });
    console.log(this.route.snapshot.queryParamMap.get('url'));
    this.url = this.route.snapshot.queryParamMap.get('url');
  }

}
