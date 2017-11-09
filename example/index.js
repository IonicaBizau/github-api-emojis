"use strict";

// Usage:
//// Map
const emojisMap = require("../lib/map")

if (emojisMap["tada"]) {
    console.log("Yay, 'tada' exists!")
    // => Yay, 'tada' exists!
}

//// List
const emojisList = require("../lib/list")

console.log(emojisList.filter(c => c.startsWith("heart")))
// =>
// [ 'heart',
//   'heart_decoration',
//   'heart_eyes',
//   'heart_eyes_cat',
//   'heartbeat',
//   'heartpulse',
//   'hearts' ]

// Or simply require the lib if you need to use both
const GitHubApiEmojis = require("../lib");

console.log(GitHubApiEmojis.list);
// =>
// [ '100',
//   '1234',
//   '+1',
//    ...
//   'baseball',
//   ... 1408 more items ]

console.log(GitHubApiEmojis.map);
// =>
// { '100': 1,
//   '1234': 1,
//   '+1': 1,
//   '-1': 1,
//   '1st_place_medal': 1,
//   '2nd_place_medal': 1,
//   '3rd_place_medal': 1,
//   '8ball': 1,
//   a: 1,
//   ...
//   zipper_mouth_face: 1,
//   zzz: 1 }
