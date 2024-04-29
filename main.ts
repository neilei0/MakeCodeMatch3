controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectMode == -1) {
        cursor.y += -16
    } else {
        cursor.setPosition(loc1, loc2 - 16)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    selectMode = 0 - selectMode
    info.setScore(selectMode)
    if (selectMode == -1) {
        loc1 = cursor.x
        loc2 = cursor.y
        cursor.setImage(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `)
    } else {
        cursor.setImage(img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            `)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectMode == -1) {
        cursor.x += -16
    } else {
        cursor.setPosition(loc1 - 16, loc2)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectMode == -1) {
        cursor.x += 16
    } else {
        cursor.setPosition(loc1 + 16, loc2)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectMode == -1) {
        cursor.y += 16
    } else {
        cursor.setPosition(loc1, loc2 + 16)
    }
})
function generate (num: number, num2: number) {
    list = [
    img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `,
    img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 8 8 8 8 e 8 6 6 7 6 . . . 
        . e 8 8 a a 8 7 7 7 7 7 8 6 . . 
        . e 8 a a 8 6 7 7 7 6 7 6 8 8 . 
        e 8 a c 8 8 6 7 7 6 8 7 7 6 . . 
        e 8 a a 8 8 6 7 6 8 8 6 7 7 6 . 
        e 8 a 8 8 8 6 6 8 8 8 e 7 7 6 . 
        e 8 a 8 8 a 8 8 8 a 8 8 e 7 6 . 
        e 8 a 8 8 8 8 8 8 8 8 8 e c 6 . 
        e e 8 8 8 8 8 8 a e 8 e e c . . 
        . e e e 8 8 a 8 8 e e e c . . . 
        . . e e 8 e 8 8 e e e c . . . . 
        . . . e e e c e c c c . . . . . 
        . . . . . . c c . . . . . . . . 
        `,
    img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `,
    img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 4 4 e e . . 
        . c e e e e e c 6 e e 4 4 4 e . 
        . c e e e 4 e c c 4 4 5 4 4 e . 
        c e e e 4 4 4 4 4 4 4 5 5 4 4 e 
        c e e 4 4 4 4 4 4 4 4 4 4 4 4 e 
        c e e 4 4 4 4 4 4 4 4 4 4 4 4 e 
        c e e 4 4 4 4 4 4 4 4 4 4 4 4 e 
        c e e 4 4 4 4 4 4 4 4 4 4 4 4 e 
        c e e 4 4 4 4 4 4 4 4 4 4 4 4 e 
        . e e e 4 4 4 4 4 4 4 4 4 4 e . 
        . 4 e e 4 4 4 4 4 4 4 4 4 5 e . 
        . . 4 e e 4 4 4 4 4 4 4 5 e . . 
        . . . 4 4 e e 4 4 4 5 e e . . . 
        . . . . . 4 4 e e e e . . . . . 
        `,
    img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 3 3 5 3 e 8 6 6 7 6 . . . 
        . e 3 3 4 4 3 7 7 7 7 7 8 6 . . 
        . e 3 4 4 3 6 7 7 7 6 7 6 8 8 . 
        e 3 4 5 3 3 6 7 7 6 3 7 7 6 . . 
        e 3 4 4 3 3 6 7 6 3 3 6 7 7 6 . 
        e 3 4 3 3 3 6 6 3 3 3 e 7 7 6 . 
        e 5 4 3 3 5 3 3 3 5 3 3 e 7 6 . 
        e 3 4 3 3 3 3 3 3 3 3 3 e c 6 . 
        e 3 3 3 3 3 3 3 5 e 3 e e c . . 
        e e 3 e 3 3 5 3 3 e e e c . . . 
        e e e e 3 e 3 3 e e e c . . . . 
        e e e 3 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `
    ]
    tile = sprites.create(list._pickRandom(), SpriteKind.Food)
    scaling.scaleToPercent(tile, 90, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    grid.place(tile, tiles.getTileLocation(num, num2))
}
function matchCheck () {
    for (let i of grid.allSprites()) {
        for (let j of grid.lineAdjacentSprites(tiles.getTileLocation(0, 0), CollisionDirection.Left)) {
        	
        }
    }
}
let tile: Sprite = null
let list: Image[] = []
let loc2 = 0
let loc1 = 0
let selectMode = 0
let cursor: Sprite = null
scene.setBackgroundColor(12)
tiles.setCurrentTilemap(tilemap`level2`)
cursor = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `, SpriteKind.Player)
grid.place(cursor, tiles.getTileLocation(0, 0))
cursor.setStayInScreen(true)
for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 6; j++) {
        generate(i, j)
    }
}
selectMode = -1
info.setScore(selectMode)
