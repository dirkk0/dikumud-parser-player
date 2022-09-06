"use strict";
const fs = require("fs");

const filename = "are/asgard.are"

let data = fs.readFileSync(filename, { encoding: 'utf8', flag: 'r' });

let temp = ""

temp = data.split("#ROOMS") // .split("\n")
// temp = temp[1].split("#RESET")[0]
temp = temp[1].split("#0\n")[0]
// temp = temp[0].split("\n")
// temp = temp.join("\n")
// console.log(temp)

temp = temp.split("\n").slice(1).join("\n")
temp = "S\n" + temp
temp = temp.split("S\n")
temp = temp.slice(1, -1)

// temp[0] = temp[0].split("\n").slice(1,-1).join("\n")

let world = {}

for (let i = 0; i < temp.length; i++) {
    const el = temp[i];
    // console.log(el)
    let t = el.split("\n")
    let id = t[0].substring(1)
    console.log(id)

    // if (id != "0") {

    t = t.slice(0).join("\n").split("~\n")
    let title = t[0].split("\n")[1]
    // console.log(t[1])
    let desc = t[1].split("\n").join(" ")

    let exits = []
    // let exits = el.split("D0")[1].split("\n")[3] //.slice(2,-1) // .split("\n").join(" ")

    for (let j = 0; j < 6; j++) {
        let test = el.split("D" + j)
        if (test[1]) {
            exits[j] = test[1].split("~")[2].split(" ")[2].split("\n")[0]
            // exits[j] = test[1].split("\n")[3] //.slice(2,-1) // .split("\n").join(" ")
        } else {
            exits[j] = false
        }
    }
    world[id] = { "title": title, "desc": desc, "exits": exits }
    // if (i == 15) {break}

    // }


}


fs.writeFileSync("data.json", JSON.stringify(world, 2, 2))


// temp = temp.join("=====\n")
// fs.writeFileSync("  ", temp)






process.exit()