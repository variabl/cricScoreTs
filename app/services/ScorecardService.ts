import {Injectable, EventEmitter} from "angular2/core";
import {Http} from "angular2/http";
import {BallBowled} from "./BallBowled"

@Injectable()
export class ScorecardService {

    totalScoreEmitter: EventEmitter<Number> = new EventEmitter();
    ballJson;
    allBalls;
    totalScore;
    constructor() {



        this.ballJson = new BallBowled();

        this.allBalls = []
        this.totalScore = 0;

    }



    addEvenRunsByBat(runs) {

        this.ballJson.ball.ballNumberThisOver++;
        this.ballJson.ball.legalBallNumberThisOver++;
        this.ballJson.runs.runsThisBall = runs;
        this.ballJson.runs.runsByBat = runs;


        if (this.checkLastBallOfOver()) {
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
        if (this.checkLastBallOfOver()) {
            this.crossPitch();
            this.overChange();
        }


    }


    checkLastBallOfOver() {
        if (this.ballJson.ball.legalBallNumberThisOver == 6) {
            return true;
        }
        else
        { return false; }
    }


    crossPitch() {
        var temp = this.ballJson.batsman.striker;
        this.ballJson.batsman.striker = this.ballJson.batsman.nonStriker;
        this.ballJson.batsman.nonStriker = temp;
    }


    overChange() {
        this.ballJson.ball.ballNumberThisOver = 0;
        this.ballJson.ball.legalBallNumberThisOver = 0;
        this.ballJson.ball.overs++;
    }


    saveBall(ballJson) {

        this.allBalls.push(JSON.stringify(ballJson));

    }


    totalRuns() {
        var totalScore = 0;

        console.log(this.allBalls);

        for (var thisBall of this.allBalls) {
            var thisBallObject: BallBowled = JSON.parse(thisBall)
            totalScore += thisBallObject.runs.runsThisBall;
        }
        return totalScore;

    }



    emitTotalRuns() {

        this.totalScoreEmitter.emit(this.totalRuns())
    }

    getTotalScoreEmitted() {
        return this.totalScoreEmitter;
    }
}

   
    
  
    
