
let thisRoom = "12010"  // asgard
// let thisRoom = "10000" // zoo

// let thisRoom = "12013"

async function getData() {
    await fetch("data.json")
        .then((response) => response.json())
        .then((result) => {
            // console.log('Success:', result);
            world = result
            // console.log('Success:', world);
            goto(thisRoom)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

getData()


let debug = true

// const dirs = ["north", "east", "south", "west", "up", "down"]
const dirs = ["n", "e", "s", "w", "u", "d"]

function goto(theRoom) {
    document.title = world[theRoom].title
    $("#title").innerText = world[theRoom].title
    if (debug) $("#title").innerText += " (" + theRoom + ")"
    $("#desc").innerText = world[theRoom].desc

    if (world[theRoom].exits) {
        for (let i = 0; i < 6; i++) {
            if (world[theRoom].exits[i]) {
                $("#b" + i).style = "visibility: visible"
                $("#b" + i).innerText = dirs[i]
                // if (debug) $("#b" + i).innerText += " " + world[theRoom].exits[i]
                if (debug) $("#b" + i).title = world[theRoom].exits[i]
            } else {
                $("#b" + i).innerText = ""
                $("#b" + i).style = "visibility: hidden"
            }
        }
    }
    thisRoom = theRoom
}

function doSomething(i) {
    goto(world[thisRoom].exits[i])
}