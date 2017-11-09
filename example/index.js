"use strict";

const GitHubApiEmojis = require("../lib");

console.log(GitHubApiEmojis);
// =>
// [ '100',
//   '1234',
//   '+1',
//    ...
//   'baseball',
//   ... 1408 more items ]

console.log(GitHubApiEmojis.includes("tada"));
// => true

console.log(GitHubApiEmojis.includes("foo"));
// => false
