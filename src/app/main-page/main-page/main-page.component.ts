import { Component, OnInit } from '@angular/core';
import { INewSummoner } from '../../Interfaces/INewSummoner';
import { ToxicService } from '../../services/toxic.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  wasPositiveExperience;
  newSummoner: INewSummoner = {} as INewSummoner;

  positiveCheckboxes = [
    { text: 'Stayed Cool', value: false },
    { text: 'Great Shotcalling', value: false },
    { text: 'GG <3', value: false }
  ];

  negativeCheckboxes = [
    { text: 'Negative Attitude', value: false },
    { text: 'Verbal Abuse', value: false },
    { text: 'Leaving The Game / AFK', value: false },
    { text: 'Intentional Feeding', value: false },
    { text: 'Hate Speech', value: false },
    { text: 'Cheating', value: false }
  ];


  constructor(private toxicService: ToxicService) { }

  ngOnInit(): void {
  }

  handleExperienceClick(bool: boolean): void {
    const name = this.newSummoner.name;
    this.newSummoner = {} as INewSummoner;

    this.newSummoner.name = name;
    this.wasPositiveExperience = bool;
    this.newSummoner.isPositiveExperience = bool;
  }

  handleAddNewSummonerClick(): void {
    console.log(this.newSummoner);
    this.newSummoner.submittedTime = Date.now();
    this.toxicService.addSummoner(this.newSummoner);
  }

  reset(): void {
    this.newSummoner = {} as INewSummoner;
  }
}
