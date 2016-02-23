export class BallBowled {
    ball: Ball;
    runs: Runs;
    wicket: Wicket;
    batsman: Batsman;
    bowler: Bowler
}


 class Ball {
    overs: number;
    legalBallNumberThisOver: number;
    ballNumberThisOver: number;
    isFreeHit: boolean;
    
}

 class Runs {
    runsThisBall:number;
    runsByBat:number;
    runsByRunning:number;
    runsByWide:number;
    runsByNoBall:number;
    runsByBye:number;
    runsByLegBye:number;
    penalty:number
}

 class Wicket {
    isWicket:boolean;
    typeWicket:string;
    fielderInvolved:string[]
}

 class Batsman {
    striker:string;
    nonStriker:string;
    isStrikerOut: boolean; 
    pitchCrossed: boolean; 
    BattingPie:number; 
    BatsmanContinues: boolean;
    NextBatsman:string
    
}


 class Bowler {
    bowler:string;
    contributeToBowler:boolean; 
    bowlerContinues: boolean; 
    continuesSpell: boolean; 
    BowlingEnd: string; 
    BowlingGuard: string; 
    BowlingQuadrant:number
    
}