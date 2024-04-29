def on_a_pressed():
    cursor.set_image(img("""
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
    """))
    controller.move_sprite(cursor, 0, 0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def generate(num: number, num2: number):
    global list2, mySprite2
    list2 = [img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """)]
    mySprite2 = sprites.create(list2[randint(0, 3)], SpriteKind.food)
    grid.place(mySprite2, tiles.get_tile_location(num, num2))
def matchCheck():
    pass
mySprite2: Sprite = None
list2: List[Image] = []
cursor: Sprite = None
scene.set_background_color(12)
tiles.set_current_tilemap(tilemap("""
    level2
"""))
cursor = sprites.create(img("""
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
    """),
    SpriteKind.player)
grid.place(cursor, tiles.get_tile_location(0, 0))
grid.move_with_buttons(cursor)
for i in range(10):
    for j in range(7):
        generate(i, j)
pick1 = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.food)
pickLocation = grid.get_location(cursor)