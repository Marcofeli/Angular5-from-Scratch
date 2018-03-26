import { Component, OnInit } from '@angular/core';
import { trigger,style,stagger,transition,animate,keyframes,query } from "@angular/animations";
import { DataService } from "../data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  //this only define the animation to use it check the template
  animations: [
    //goals is the name of the animation
    trigger('goals',[
      //it will make a transition from any state (*) to any state (*)
      transition("*=>*",[
        //when something enter the DOM, sometimes the animation will fail without the {optional:true}
        query(":enter",style({opacity:0}),{optional:true}),
        //stagger means 'tambalear', the parameter is a delay
        query(":enter",stagger("300ms",[
          animate(".6s ease-in",keyframes([
            //it will be having more opacity by the time, it will happen in .6s as declare above
            style({opacity:0,transform:"translateY(-75%)",offset:0}),
            style({opacity:.5,transform:"translateY(35px)",offset:.3}),
            style({opacity:1,transform:"translateY(0)",offset:1})
          ]))
        ]),{optional:true}),
        query(":leave",stagger("300ms",[
          animate(".6s ease-in",keyframes([
            style({opacity:1,transform:"translateY(0)",offset:0}),
            style({opacity:.5,transform:"translateY(35px)",offset:.3}),
            style({opacity:0,transform:"translateY(-75%)",offset:1})
          ]))
        ]),{optional:true})
      ])
    ]) 
  ]
})
export class HomeComponent implements OnInit {

  goalText: string="";
  goals = [];
  itemCount: number;

  constructor(private _data:DataService) {

   }

  ngOnInit() {
    this._data.goal.subscribe(res=>this.goals=res);
    this._data.changeGoal(this.goals)
    this.itemCount=this.goals.length;
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText="";
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals)
  }
  removeItem(i){
    this.goals.splice(i,1);
    this._data.changeGoal(this.goals)
  }

}
