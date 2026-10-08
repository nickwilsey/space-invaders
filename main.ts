input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    Shoot = game.createSprite(Player.get(LedSpriteProperty.X), Player.get(LedSpriteProperty.Y))
    music.playMelody("G F E D C - - - ", 4000)
    Shoot.set(LedSpriteProperty.Brightness, 100)
    for (let index = 0; index < 4; index++) {
        Shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (Shoot.isTouching(Enemy)) {
            game.addScore(1)
            music.playMelody("C E G - - - - - ", 1000)
        }
        if (Shoot.get(LedSpriteProperty.Y) <= 0) {
            Shoot.delete()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
let EnemyFire: game.LedSprite = null
let Shoot: game.LedSprite = null
let Enemy: game.LedSprite = null
let Player: game.LedSprite = null
game.setLife(4)
game.setScore(0)
Player = game.createSprite(0, 4)
Enemy = game.createSprite(2, 0)
basic.forever(function () {
    Enemy.move(randint(-1, 1))
    basic.pause(100)
    Enemy.ifOnEdgeBounce()
    EnemyFire = game.createSprite(Enemy.get(LedSpriteProperty.X), Enemy.get(LedSpriteProperty.Y))
    EnemyFire.set(LedSpriteProperty.Brightness, 100)
    for (let index = 0; index < 4; index++) {
        EnemyFire.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
        if (EnemyFire.isTouching(Player)) {
            game.removeLife(1)
            music.playMelody("F C - - - - - - ", 500)
        }
        if (EnemyFire.get(LedSpriteProperty.Y) >= 4) {
            EnemyFire.delete()
        }
    }
})
