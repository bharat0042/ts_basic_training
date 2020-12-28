let sports : string[] = ['soccer', 'basketball', 'tennis', 'baseball', 'golf']

for(let i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}

console.log("\n");

for(let tempSport of sports) {
    if(tempSport == "soccer") {
        console.log(tempSport + " is the best");
    } else {
        console.log(tempSport);
    }
}