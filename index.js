function superbowlWin(record) {
    const winningYear = record.find(game => game.result === "W");
    return winningYear ? winningYear.year : undefined;
}

const record = [
    { year: "2015", result: "L" },
    { year: "2016", result: "W" },
    { year: "2017", result: "L" }
];

console.log(superbowlWin(record)); 

