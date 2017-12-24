<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


# github-api-emojis

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/github-api-emojis.svg)](https://www.npmjs.com/package/github-api-emojis) [![Downloads](https://img.shields.io/npm/dt/github-api-emojis.svg)](https://www.npmjs.com/package/github-api-emojis)

> The list of emoji names available in GitHub API

## :cloud: Installation

```sh
# Using npm
npm install --save github-api-emojis

# Using yarn
yarn add github-api-emojis
```


## :clipboard: Example



```js
// Usage:
//// Map
const emojisMap = require("github-api-emojis/lib/map")

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
const GitHubApiEmojis = require("github-api-emojis");

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
```



## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:

 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`showdown-emoji`](https://github.com/Bloggify/showdown-emoji#readme) (by Bloggify)—A Showdown extension for replacing emoji codes with images.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2017#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
