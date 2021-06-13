 const player = add([
  sprite('player'),
  scale(0.5),
  pos(20,20),
  body() //agrega la gravedad
])

const MOVE_SPED = 120

keyDown('right',()=>{
  player.move(MOVE_SPED, 0) //Le paso una pos X y una Y
})

keyDown('left',()=>{
  player.move(-MOVE_SPED, 0) //Le paso una pos X y una Y
})

addLevel([
  '             ',
  '  y      y   ',
  'l      y       ',
  'xxxxxxxxxxxxx',
],{
  width: 40,
  height: 40,
  'x' : [sprite('terreno'),solid()],
  'y': [sprite('enemy'), scale(0.5),body(),'danger']
})

player.collides('danger',()=>{
  destroy(player)
}
)