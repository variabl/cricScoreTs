import {Page} from 'ionic-framework/ionic';
import {ScorecardService} from '../../services/ScorecardService';
import {BallBowled} from '../../services/BallBowled';


@Page({
    templateUrl: 'build/pages/scoring/scoring.html',
    providers: [ScorecardService]
})
export class Scoring{
ball = new BallBowled();
scoreCard;
subscription;
subscription1;
totalScore;
    constructor(public scoreService: ScorecardService) {
    }
    
    ngOnInit() {
    this.subscription = this.scoreService.getBallBowledEmitter()
      .subscribe(ballArray => {
          });
          
              this.subscription1 = this.scoreService.getTotalScore()
      .subscribe(Runs => { this.totalScore = Runs
          });
  }
    
score = this.scoreService.ballJson;
    
    allBalls = this.scoreService.allBalls;
    


         addEvenRuns (runsThisBall) {
/*            this.scoreService.setRuns(runsThisBall);
            if (runsThisBall % 2 == 1) {
                this.scoreService.crossPitch();
            };
            this.scoreService.emitBallBowledEvent();*/
           this.scoreService.addEvenRunsByBat(runsThisBall);
           this.scoreService.saveBall(this.score);
           this.scoreService.emitBallBowledEvent();
            
        };
        
                 addOddRuns (runsThisBall) {
/*            this.scoreService.setRuns(runsThisBall);
            if (runsThisBall % 2 == 1) {
                this.scoreService.crossPitch();
            };
            this.scoreService.emitBallBowledEvent();*/
           this.scoreService.addOddRunsByBat(runsThisBall);
                     this.scoreService.saveBall(this.score);
             this.scoreService.emitBallBowledEvent();
            
        };







}

  