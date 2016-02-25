export class BallBowled {
    ball: Ball;
    runs: Runs;
    wicket: Wicket;
    batsman: Batsman;
    bowler: Bowler
    
    constructor(){
        this.ball = new Ball();
        this.runs = new Runs();
        this.wicket = new Wicket();
        this.batsman = new Batsman();
        this.bowler = new Bowler();
    }
}


export class Ball {
    overs: number;
    legalBallNumberThisOver: number;
    ballNumberThisOver: number;
    isFreeHit: boolean;
    
    constructor() {
        this.overs = 0;
        this.legalBallNumberThisOver = 0;
        this.ballNumberThisOver = 0;
        this.isFreeHit = false
    }
    
}

export  class Runs {
    runsThisBall:number;
    runsByBat:number;
    runsByRunning:number;
    runsByWide:number;
    runsByNoBall:number;
    runsByBye:number;
    runsByLegBye:number;
    penalty:number
    
    
    constructor(){
        this.runsThisBall = 0;
        this.runsByBat =0;
        this.runsByRunning =0;
        this.runsByWide =0;
        this.runsByNoBall=0;
        this.runsByBye =0;
        this.runsByLegBye =0;
        this.penalty = 0
    }
}

export  class Wicket {
    isWicket:boolean;
    typeWicket:string;
    fielderInvolved:string[]
    
    constructor(){
        this.isWicket = false;
        this.typeWicket = "";
        this.fielderInvolved = [];
    }
}

export  class Batsman {
    striker:string;
    nonStriker:string;
    isStrikerOut: boolean; 
    isPitchCrossed: boolean; 
    battingPie:number; 
    batsmanContinues: boolean;
    nextBatsman:string
    
    constructor(){
        this.striker = "Batsman1";
        this.nonStriker="Batsman2";
        this.isStrikerOut=false;
        this.isPitchCrossed=false;
        this.battingPie=0;
        this.batsmanContinues=true;
        this.nextBatsman=""
    }
    
}


export  class Bowler {
    bowler:string;
    contributeToBowler:boolean; 
    bowlerContinues: boolean; 
    continuesSpell: boolean; 
    bowlingEnd: string; 
    bowlingGuard: string; 
    bowlingQuadrant:number
    
    constructor(){
        this.bowler = "Bowler1";
        this.contributeToBowler = true;
        this.bowlerContinues = true;
        this.continuesSpell = true;
        this.bowlingEnd = "";
        this.bowlingGuard = "";
        this.bowlingQuadrant=0;
        
    }
    
}