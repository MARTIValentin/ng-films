import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Series} from "../composants/modeles/Series";

@Injectable({
  providedIn: 'root'
})
export class PremierServiceService {

  public tSeries$ : Observable<Series[]>;
  public serie$!: Observable<Series>;

  constructor(private http: HttpClient) {
    this.tSeries$ = this.http.get<Series[]>("http://10.103.0.254:8000/series");
  }

  public returnSeries(): Observable<Series[]>{
    return this.tSeries$;


}

  changementDaffichage(id: any) {
    console.log(id);
    this.serie$ = this.http.get<Series>("http://10.103.0.254:8000/api/series/"+id+".json");
  }
}

