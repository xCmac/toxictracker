import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summoner-view',
  templateUrl: './summoner-view.component.html',
  styleUrls: ['./summoner-view.component.scss']
})
export class SummonerViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleStatsLookUpClick(site) {
    console.log(site);
  }

}
