let std: Array<number>, high: Array<number>, low: Array<number>;
let weightTxt: string = "LO", weight: Array<number>;
let state = "SEL"; // SEL, ROLL, DONE
let output:number;

input.onButtonPressed(Button.A, function () {
    if (state == "ROLL") { return }

    cycleWeight()
    if(state == "DONE") {
        state = "SEL"
    }
    //console.log(weightTxt)
})
input.onButtonPressed(Button.B, function () {
    if (state == "ROLL") { return }
    //console.log(weightTxt)
    roll()
})
//this is main flow control; add startup needs to init
init()
let last = 0

basic.forever(()=> {
    let time = control.millis()
    let delta = time - last
    last = time
    main(time, delta)
});


function init() { //this runs once on program startup
    std = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    high = [1, 5, 8, 10, 10, 11, 11, 12, 13, 14, 15, 15, 16, 16, 17, 17, 18, 19, 20, 20]
    low = [1, 1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 8, 9, 10, 10, 11, 11, 12, 15, 20]
    cycleWeight()
    

}
function main(time: number, delta: number) { //runs every "frame"
    // if (delta != 0) {
    //     console.log(/*"time elapsed:" + time + */" frame delta:" + delta)
    // }

}

function cycleWeight() {
    switch (weightTxt) {
        case "STD":
            weightTxt = "HI"
            weight = high
            show("H")
            break;
        case "HI":
            weightTxt = "LO"
            weight = low
            show("L")
            break;
        case "LO":
            weightTxt = "STD"
            weight = std
            show("S")
            break;
        default:
        //how did we get here?
    }
}

function show(txt:any){
    led.plotAll()
    led.toggleAll()
    //display stuff here
    switch(txt){
        case "S":
            led.plot(1, 0)
            led.plot(2, 0)
            led.plot(3, 0)
            led.plot(1, 1)
            led.plot(1, 2)
            led.plot(2, 2)
            led.plot(3, 2)
            led.plot(3, 3)
            led.plot(3, 4)
            led.plot(2, 4)
            led.plot(1, 4)
            break;
        case "H":
            led.plot(1, 0)
            led.plot(1, 1)
            led.plot(1, 2)
            led.plot(1, 3)
            led.plot(1, 4)
            led.plot(3, 0)
            led.plot(3, 1)
            led.plot(3, 2)
            led.plot(3, 3)
            led.plot(3, 4)
            led.plot(2, 2)
            break;
        case "L":
            led.plot(1, 0)
            led.plot(1, 1)
            led.plot(1, 2)
            led.plot(1, 3)
            led.plot(1, 4)
            led.plot(2, 4)
            led.plot(3, 4)
            break;
        case 1:
            basic.showLeds(`
            ..#..
            ..#..
            ..#..
            ..#..
            ..#..
        `)
        break;
        case 2:
            basic.showLeds(`
            .###.
            ...#.
            .###.
            .#...
            .###.
        `)
            break;
        case 3:
            basic.showLeds(`
            .###.
            ...#.
            ..##.
            ...#.
            .###.
        `)
            break;
        case 4:
            basic.showLeds(`
            .#.#.
            .#.#.
            .###.
            ...#.
            ...#.
        `)
            break;
        case 5:
            basic.showLeds(`
            .###.
            .#...
            .###.
            ...#.
            .###.
        `)
            break;
            break;
        case 6:
            basic.showLeds(`
            .###.
            .#...
            .###.
            .#.#.
            .###.
        `)
            break;
        case 7:
            basic.showLeds(`
            .###.
            ...#.
            ...#.
            ...#.
            ...#.
        `)
            break;
        case 8:
            basic.showLeds(`
            .###.
            .#.#.
            .###.
            .#.#.
            .###.
        `)
            break;
        case 9:
            basic.showLeds(`
            .###.
            .#.#.
            ...#.
            ...#.
            ...#.
        `)
            break;
        case 10:
            basic.showLeds(`
            #.###
            #.#.#
            #.#.#
            #.#.#
            #.#.#
            #.###
            `)
        case 11:
            basic.showLeds(`
            .#.#.
            .#.#.
            .#.#.
            .#.#.
            .#.#.
        `)
            break;
        case 12:
            basic.showLeds(`
            #.###
            #...#
            #.###
            #.#..
            #.###
        `)
            break;
        case 13:
            basic.showLeds(`
            #.###
            #...#
            #..##
            #...#
            #.###
        `)
            break;
        case 14:
            basic.showLeds(`
            #.#.#
            #.#.#
            #.###
            #...#
            #...#
        `)
            break;
        case 15:
            basic.showLeds(`
            #.###
            #.#..
            #.###
            #...#
            #.###
        `)
            break;
        case 16:
            basic.showLeds(`
            #.###
            #.#..
            #.###
            #.#.#
            #.###
        `)
            break;
        case 17:
            basic.showLeds(`
            #.###
            #...#
            #...#
            #...#
            #...#
        `)
            break;
        case 18:
            basic.showLeds(`
            #.###
            #.#.#
            #.###
            #.#.#
            #.###
        `)
            break;
        case 19:
            basic.showLeds(`
            #.###
            #.#.#
            #.###
            #...#
            #...#
        `)
            break;
        case 20:
            basic.showLeds(`
            #####
            ..#.#
            ###.#
            #.#.#
            #####
        `)
            break;
    }
}

function roll(){
    state = "ROLL"
    //do rolling animation that lasts roughtly 1 second
    for(let i = 0; i < 10; i++){
        let fake = Math.floor(Math.random() * 20)
        show(weight[fake])
        //pause(30)
    }

    let tmp = Math.floor(Math.random() * 20)

    output = weight[tmp]
    console.log(output)
    show(output)
    state = "DONE"
}