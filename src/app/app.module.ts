import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitreComponent } from './composants/titre/titre.component';
import { SpinnerComponent } from './composants/spinner/spinner.component';
import { SeriesComponent } from './composants/series/series.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { AProposComponent } from './composants/a-propos/a-propos.component';
import { BarreNavComponent } from './composants/barre-nav/barre-nav.component';
import { SaisonsComponent } from './composants/saisons/saisons.component';

const appRoutes: Routes = [
  {path:'Accueil', component: TitreComponent},
  {path:'Series', component: SeriesComponent},
  {path:'aPropos', component: AProposComponent},
  {path:'Saisons', component: SaisonsComponent},


]

@NgModule({



  declarations: [

    AppComponent,
    TitreComponent,
    SpinnerComponent,
    SeriesComponent,
    AProposComponent,
    BarreNavComponent,
    SaisonsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
    appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
