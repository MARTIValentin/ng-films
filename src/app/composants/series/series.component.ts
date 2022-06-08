import { Component, OnInit } from '@angular/core';
import {PremierServiceService} from "../../services/premierService.service";
import {Series} from "../modeles/Series";
import {Observable} from "rxjs";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  public tSerie$: Observable<Series[]>;
  public serie$: Observable<Series>;

  constructor(private svc: PremierServiceService) {
    this.tSerie$ = this.svc.tSeries$;

  }


  ngOnInit(): void {
  }

  changementDaffichage(id: number) {
    this.svc.changementDaffichage(id);
    this.serie$ = this.svc.serie$;
  }
}

