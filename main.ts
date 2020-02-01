namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanSand0, function (sprite, location) {
    game.over(true)
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
myCorg.follow()
tiles.setTilemap(tiles.createTilemap(
            hex`140008000b000000000000000000000000000000000000000303030000000000000000000000000000000000000000000303030003030300000000000000000000000000000000000000000000030303030303030000000000000000000000000000000000000000000000000003030303030303030000000000000000000000000000000000000000000000000000000303030303030303030000000000000000000000`,
            img`
. . . . . . . . . . . . . . . . . . . . 
2 2 2 . . . . . . . . . . . . . . . . . 
. . . . 2 2 2 . 2 2 2 . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath2,sprites.builtin.coral2,sprites.builtin.oceanDepths0,sprites.builtin.oceanDepths8,sprites.builtin.oceanDepths7,sprites.builtin.coral0,sprites.builtin.coral1,sprites.builtin.coral3,sprites.builtin.oceanDepths1,sprites.builtin.coral5,sprites.builtin.oceanSand0],
            TileScale.Sixteen
        ))
