const GitHub = require("gh.js")
    , fs = require("fs")

const github = new GitHub()

github.get("emojis", (err, res) => {
    if (err) throw err
    for (let k in res) res[k] = 1
    fs.writeFileSync(`${__dirname}/../lib/map.json`, JSON.stringify(res))
    fs.writeFileSync(`${__dirname}/../lib/list.json`, JSON.stringify(Object.keys(res)))
})
