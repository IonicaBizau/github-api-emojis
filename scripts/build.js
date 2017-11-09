const GitHub = require("gh.js")
    , fs = require("fs")

const github = new GitHub()

github.get("emojis", (err, res) => {
    if (err) throw err
    fs.writeFileSync(`${__dirname}/../lib/index.json`, JSON.stringify(Object.keys(res)))
})
