import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { TennisCoach } from "./TennisCoach";

let theCoach : Coach[] = [];
let one = new TennisCoach();
let two = new CricketCoach();

theCoach.push(one);
theCoach.push(two);

for(let temp of theCoach) {
    console.log(temp.getDailyWorkout());
}