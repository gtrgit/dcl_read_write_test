/// --- Set up a system ---

/// --- Spawner function ---

function spawnCube(x: number, y: number, z: number) {
  // create the entity
  const cube = new Entity()

  // add a transform to the entity
  cube.addComponent(new Transform({ position: new Vector3(x, y, z) }))

  // add a shape to the entity
  cube.addComponent(new BoxShape())

  // add the entity to the engine
  engine.addEntity(cube)

  return cube
}

/// --- Spawn cubes ---

//Read Cube
const readCube = spawnCube(6, 1, 8)

 const readEntity = new Entity()
const readText = new TextShape("Read dB. Click Cube")
readText.fontSize = 2

readText.color = Color3.Black()
readEntity.addComponent(readText)
readEntity.addComponent(new Transform({position: new Vector3(0,1,0)}))

readEntity.setParent(readCube)


readCube.addComponent(
  new OnClick(() => {
    log('Read from database:')
    log('show output here!')
  })
)


//Write Cube
const writeCube = spawnCube(9, 1, 8)

const writeEntity = new Entity()
const writeText = new TextShape("Write dB: Click Cube")
writeText.fontSize = 2
writeText.color = Color3.Blue()
writeEntity.addComponent(writeText)
writeEntity.addComponent(new Transform({position: new Vector3(0,1,0)}))

writeEntity.setParent(writeCube)

let recId:number = 0

writeCube.addComponent(
  new OnClick(() => {
    recId ++
    log('Write to database: record id = '+ recId)
    
  })
)
