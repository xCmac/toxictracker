import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';
import { SummonerViewModule } from '../summoner-view/summoner-view.module';



@NgModule({
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    SummonerViewModule
  ]
})
export class MainPageModule { }
