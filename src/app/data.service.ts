import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";


//this service will be used to share data between components
@Injectable()
export class DataService {

  private goals = new BehaviorSubject(['The initial goal','Another silly life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }

}
