import { Component, OnInit } from '@angular/core';
import { ToxicService } from 'src/app/services/toxic.service';

@Component({
  selector: 'app-summoner-view',
  templateUrl: './summoner-view.component.html',
  styleUrls: ['./summoner-view.component.scss']
})
export class SummonerViewComponent implements OnInit {

  constructor(public toxicService: ToxicService) { }

  ngOnInit(): void {
  }

  handleStatsLookUpClick(site: string, name: string): void {
    console.log(site);

    const opgg = () => encodeURI(`https://na.op.gg/summoner/userName=${name}`);
    const mobalyticsgg = () => encodeURI(`https://app.mobalytics.gg/lol/profile/NA/${name}/overview`);
    const porofessorgg = () => encodeURI(`https://www.leagueofgraphs.com/summoner/na/th3+sauce`.split(' ').join('+'));
    const blitzgg = () => encodeURI(`https://blitz.gg/lol/profile/na1/${name}`);

    switch (site) {
      case 'OP':
        window.open(opgg());
        break;
      case 'MOBALYTICS':
        window.open(mobalyticsgg());
        break;
      case 'POROFESSOR':
        window.open(porofessorgg());
        break;
      case 'BLITZ':
        window.open(blitzgg());
        break;
      default:
        break;
    }
  }

}
