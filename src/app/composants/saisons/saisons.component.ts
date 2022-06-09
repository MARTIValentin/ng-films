import { Component, OnInit } from '@angular/core';
import {PremierServiceService} from "../../services/premierService.service";
import {Observable} from "rxjs";
import {Series} from "../modeles/Series";

@Component({
  selector: 'app-saisons',
  templateUrl: './saisons.component.html',
  styleUrls: ['./saisons.component.css']
})
export class SaisonsComponent implements OnInit {


  public serie$!: Observable<Series>;

  constructor(private svc: PremierServiceService ) {

    this.serie$ = this.svc.serie$;
  }

  ngOnInit(): void {
  }

  changementDaffichage(id: number) {
    this.svc.changementDaffichage(id);
    this.serie$ = this.svc.serie$;
  }

}
