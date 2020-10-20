import { Component, OnInit } from '@angular/core';
import { INewSummoner } from '../../Interfaces/INewSummoner';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  wasPositiveExperience;
  newSummoner: INewSummoner;

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


  constructor() { }

  ngOnInit(): void {
  }

  handleExperienceClick(bool: boolean): void {
    console.log(bool);
    this.wasPositiveExperience = bool;
  }
}
