import { Component, OnInit } from '@angular/core';
import { TheatreService } from 'src/app/Service/theatre.service';

@Component({
  selector: 'app-all-theatres',
  templateUrl: './all-theatres.component.html',
  styleUrls: ['./all-theatres.component.css']
})
export class AllTheatresComponent implements OnInit {
  theatres:any;
  constructor(private service:TheatreService) { }

  ngOnInit() {
    let response=this.service.getTheatres();
    response.subscribe(data=>this.theatres=data);
  }

  public removeTheatre(theatreID:number){
    let response=this.service.deleteTheatre(theatreID);
    response.subscribe(data=>this.theatres=data);
  }

}
