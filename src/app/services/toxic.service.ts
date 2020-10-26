import { Injectable } from '@angular/core';
import { INewSummoner } from '../Interfaces/INewSummoner';

@Injectable({
  providedIn: 'root'
})
export class ToxicService {

  constructor() {
    this._summoners = [];

    let a = { "name": "th3 sauce", "isPositiveExperience": true, "stayedCool": true, "greatShotCalling": true, "gg": true } as INewSummoner;
    let b = { "name": "th3 sauce", "isPositiveExperience": true, "stayedCool": true, "greatShotCalling": true, "gg": true } as INewSummoner;
    let c = { "name": "th3 sauce", "isPositiveExperience": true, "stayedCool": true, "greatShotCalling": true, "gg": true } as INewSummoner;

    let aa = { "name": "th3 sauce2", "isPositiveExperience": false, "negativeAttitude": true, "verbalAbuse": true, "leavingGameAFK": true } as INewSummoner;
    let bb = { "name": "th3 sauce", "isPositiveExperience": false, "negativeAttitude": true, "verbalAbuse": true, "leavingGameAFK": true } as INewSummoner;
    let cc = { "name": "th3 sauce", "isPositiveExperience": false, "negativeAttitude": true, "verbalAbuse": true, "leavingGameAFK": true } as INewSummoner;

    let n = { name: "th3 sauce", "isPositiveExperience": true, "stayedCool": true, "greatShotCalling": true, "submittedTime": 1603673485730 } as INewSummoner;
    this._summoners.push(a, b, c, aa, bb, cc, n);
  }

  private _summoners: INewSummoner[];
  public get summoners(): INewSummoner[] {
    return this._summoners;
  }

  addSummoner(summoner: INewSummoner): void {
    this._summoners.push(summoner);
    console.log(this.summoners);
  }
}
