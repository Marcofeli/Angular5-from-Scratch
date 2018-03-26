import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals:any;

  //inyecting an ActivatedRoute and a Router object and also a service
  constructor(private route:ActivatedRoute,private router:Router,private _data:DataService) { 
      //simply printing the id that was sent by parameter via the url
      this.route.params.subscribe(res=>console.log(res.id));
   }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals=res);
  }

  //this function navigate to the home component by using the path ''
  sendMeHome(){
    //inside the brackets will be placed the route
    this.router.navigate(['']);
  }

}
