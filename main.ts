input.onButtonPressed(Button.A, function () {
    voeden += 5
})
input.onButtonPressed(Button.B, function () {
    knuffel += 5
})
let knuffel = 20
let voeden = 20
let dood = 0
basic.forever(function () {
    if (dood == 0) {
        if (knuffel > 10 && knuffel > 10) {
            basic.showIcon(IconNames.Happy)
        }
        if ((knuffel < 10 || knuffel > 1) && (voeden > 1 || voeden < 10)) {
            basic.showIcon(IconNames.Sad)
        }
    }
})
basic.forever(function () {
    knuffel += -1
    voeden += -1
    basic.pause(1000)
})
basic.forever(function () {
    if (dood < 1) {
        basic.showIcon(IconNames.Asleep)
    }
})
basic.forever(function () {
    if (knuffel < 0 || voeden < 0) {
        dood = 1
    }
})
