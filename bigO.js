const { performance } = require("perf_hooks");
const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
const large = new Array(100).fill("nemo");

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
}

findNemo(large);

function boo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("booooo!");
  }
}

boo(["1", "2", "3", "4", "5"]);

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  console.log(hiArray);
}

arrayOfHiNTimes(6);
