import { Injectable } from '@angular/core';
import { Theatre } from '../theatre';
import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TheatreService {

  constructor(private http:HttpClient) { }

  public addTheatre(theatre){
    return this.http.post("http://localhost:7074/theatres",theatre,{responseType:"text" as "json"});
  }

  public getTheatres(){
    return this.http.get("http://localhost:7074/theatres");
  }

  public getTheatreById(Id){
    return this.http.get("http://localhost:7074/theatres/"+Id);
  }

  public deleteTheatre(theatreID){
return this.http.delete("http://localhost:7074/theatres/"+theatreID);
  }
}
