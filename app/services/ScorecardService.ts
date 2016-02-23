import {Injectable, EventEmitter} from "angular2/core";
import {Http} from "angular2/http";

@Injectable()
export class ScorecardService {
   ballBowledEvent : EventEmitter<any> = new EventEmitter();
    totalScoreEmitter : EventEmitter<any> = new EventEmitter();
  ballJson;
   allBalls;
   totalScore;
    constructor(){
        
    
  
        this.ballJson = {"ball":{"overs":0,  "legalBallNumberThisOver":0,"ballNumberThisOver":0,"isFreeHit": false}, 
    "runs":{"runsThisBall":0,"runsByBat":0,"runsByRunning":0,"runsByWide":0,"runsByNoBall":0,"runsByBye":0,"runsByLegBye":0,"penalty":0}, 
    "wicket":{"isWicket":false,"typeWicket":"NA","fielderInvolved":[]}, 
    "batsman":{"striker":"Batsman1","nonStriker":"Batsman2","isStrikerOut": false, "pitchCrossed": false, "BattingPie":0, "BatsmanContinues": true,"NextBatsman":"N/A"}, 
    "bowler":{"bowler":"Bowler1","contributeToBowler":true, "bowlerContinues": true, "continuesSpell": false, "BowlingEnd": "", "BowlingGuard":"", "BowlingQuadrant":0}
    };
    
    this.allBalls = []
    this.totalScore = 0;

    }


   
addEvenRunsByBat(runs) {
     
    this.ballJson.ball.ballNumberThisOver++;
    this.ballJson.ball.legalBallNumberThisOver++;
     this.ballJson.runs.runsThisBall = runs;
     this.ballJson.runs.runsByBat = runs;

     
          if(this.checkLastBallOfOver()) {
         this.crossPitch();
         this.overChange();
     }
     
}


addOddRunsByBat(runs) {
    this.ballJson.ball.ballNumberThisOver++;
    this.ballJson.ball.legalBallNumberThisOver++;
     this.ballJson.runs.runsThisBall = runs;
     this.ballJson.runs.runsByBat = runs;

          this.crossPitch();
     if(this.checkLastBallOfOver()) {
         this.crossPitch();
           this.overChange();
     }
     
     
}


checkLastBallOfOver() {
    if (this.ballJson.ball.legalBallNumberThisOver == 6 ) {
        return true;
    }
    else
{return false;}
}


    crossPitch() {
        var temp = this.ballJson.batsman.striker;
        this.ballJson.batsman.striker = this.ballJson.batsman.nonStriker ;
        this.ballJson.batsman.nonStriker = temp;
    }
    
    
    overChange(){
    this.ballJson.ball.ballNumberThisOver=0;
    this.ballJson.ball.legalBallNumberThisOver=0;
    this.ballJson.ball.overs++;
    }
    
    
    saveBall(ballJson) {
       
       this.allBalls .push(ballJson);
        
    }
    
  
  totalRuns() {
      var totalScore = 0;
       console.log(this.allBalls);
        for (var thisBall of this.allBalls) {
           
            totalScore += thisBall.runs.runsThisBall;
        }
        return totalScore;
      
  }
 
 emitBallBowledEvent() {
   
    this.totalScoreEmitter.emit(this.totalRuns())
  }
  
  getBallBowledEmitter()
{
    return this.ballBowledEvent;
}

getTotalScore() {
      return this.totalScoreEmitter;
}
}

   
    
  
    
