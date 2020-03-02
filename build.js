/* Automate building of now.json to support paths with multiple parts */

const fs = require("fs")

const nowJson = {
  rewrites: []
}

/* up to 16 parts in a path */
for(let i=17; i>=2; i--) {
  let path = ""

  for(let j=2; j<=i; j++) {
    path += `/$${j}`
  }

  nowJson.rewrites.push({
    source: "/(.*)".repeat(i),
    destination: "https://$1.glitch.me" + path
  })
}

console.log(nowJson)

fs.writeFileSync("./now.json", JSON.stringify(nowJson))