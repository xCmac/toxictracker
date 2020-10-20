import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { SummonerViewModule } from '../summoner-view/summoner-view.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    SummonerViewModule,
    FormsModule,
    NbIconModule,
  ]
})
export class MainPageModule { }
