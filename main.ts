input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 50; index++) {
        basic.showIcon(IconNames.Chessboard)
        basic.pause(250)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
