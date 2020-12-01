import { Component, OnInit, Inject } from '@angular/core';
import { FactoryService } from '../factory.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    LogService,
    { provide: 'another', useClass: LogService },
    { provide: 'same', useExisting: LogService},
    { provide: 'githubUrl', useValue: 'http://github.com'},
    { provide: 'factory', useFactory: logService => {
      return new FactoryService(logService, true);
    },
    deps: [LogService]
  }
  ]
})
export class HomeComponent implements OnInit {
  constructor(private log:
    LogService,
    @Inject('another') private another,
    @Inject('same') private same,
    @Inject('githubUrl') private url,
    @Inject('factory') private factory
    ) {
    // 같은 LogService이지만 다른 객체로 들어오게 됨.
    console.log('this.log === this.another', this.log === this.another),
    console.log('this.log === this.same', this.log === this.same),
    console.log(this.url);
  }

  ngOnInit() {
    this.log.info('LogService');
    this.factory.log();
  }

}
