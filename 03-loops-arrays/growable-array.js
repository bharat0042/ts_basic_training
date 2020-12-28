"use strict";
let sport = ['soccer', 'basketball', 'tennis', 'baseball', 'golf'];
sport.push("badminton");
sport.push("whatever");
for (let tempSport of sport) {
    if (tempSport == "soccer") {
        console.log(tempSport + " is the best");
    }
    else {
        console.log(tempSport);
    }
}
