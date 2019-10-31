import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  sonFormEvent = new EventEmitter();
  
}
