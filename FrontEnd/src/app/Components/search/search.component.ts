import { Component, OnInit } from '@angular/core';
import { TheatreService } from 'src/app/Service/theatre.service';
import { Theatre } from 'src/app/theatre';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  Id:number;
  theatre:any;
  constructor(public service:TheatreService) { }

  ngOnInit() {
  }

  public findById(){
    let response=this.service.getTheatreById(this.Id);
    response.subscribe(data=>this.theatre=data);
  }

}
