import {Page} from 'ionic-framework/ionic';
import {ScorecardService} from '../../services/ScorecardService';
import {BallBowled} from '../../services/BallBowled';


@Page({
    templateUrl: 'build/pages/scoring/scoring.html',
    providers: [ScorecardService]
})
export class Scoring{

subscription;
totalScore;
    constructor(public scoreService: ScorecardService) {
    }
    
    ngOnInit() {
              this.subscription = this.scoreService.getTotalScoreEmitted()
      .subscribe(Runs => { this.totalScore = Runs
          });
  }
    
score = this.scoreService.ballJson;
    
    allBalls = this.scoreService.allBalls;
    


         addEvenRuns (runsThisBall) {

           this.scoreService.addEvenRunsByBat(runsThisBall);
           this.scoreService.saveBall(this.score);
           this.scoreService.emitTotalRuns();
            
        };
        
                 addOddRuns (runsThisBall) {

           this.scoreService.addOddRunsByBat(runsThisBall);
                     this.scoreService.saveBall(this.score);
             this.scoreService.emitTotalRuns();
            
        };







}

  