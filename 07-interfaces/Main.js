"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const TennisCoach_1 = require("./TennisCoach");
let theCoach = [];
let one = new TennisCoach_1.TennisCoach();
let two = new CricketCoach_1.CricketCoach();
theCoach.push(one);
theCoach.push(two);
for (let temp of theCoach) {
    console.log(temp.getDailyWorkout());
}
