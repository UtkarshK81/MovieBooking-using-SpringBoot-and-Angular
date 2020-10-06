import { Component, OnInit, Input } from '@angular/core';
import { TheatreService } from 'src/app/Service/theatre.service';
import { Theatre } from 'src/app/theatre';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  
  theatre: Theatre=new Theatre(0,"","","",0);
  message:any;
  constructor(public service:TheatreService) { }

  ngOnInit(): void {
  }

  public createNow(){
  let response=  this.service.addTheatre(this.theatre);
  response.subscribe(data=>{
    this.message=data
  })
  }

}
