import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummonerViewComponent } from './summoner-view/summoner-view.component';
import { NbButtonModule, NbCardModule } from '@nebular/theme';



@NgModule({
  exports: [SummonerViewComponent],
  declarations: [SummonerViewComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
  ]
})
export class SummonerViewModule { }
