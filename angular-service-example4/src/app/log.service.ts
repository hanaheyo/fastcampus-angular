import { Injectable } from '@angular/core';

@Injectable()

export class LogService {
  private count = 0;

  public info(message: string) {
    console.log('info', message);
    this.count++;
  }
}
