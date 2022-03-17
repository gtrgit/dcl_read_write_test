//import { test } from 'models/test'
import { modelPaths } from './make_model_path'
import { modelName } from './modelTypesArray'
import {default as modelTypes} from "modelTypeColour.json"
// import { cors } from 'cors'
//const cors = require('cors')
const model = modelName
const tmp = model





const highlight8 = new Entity()
const cellGreen = new GLTFShape('models/r1c1_border_blue.gltf')

const highlightTranform8 = new Transform({
  position: new Vector3(6,3,4)
})

//log(test)
highlight8.addComponent(cellGreen)
highlight8.addComponent(highlightTranform8)
engine.addEntity(highlight8)








//log(tmp)
const newPath = modelPaths()
const highlight = new Entity()
const path = modelTypes.models[0].modelTypes[0].colour[0].modelColour
//log(path)
const highlightGreen = new GLTFShape('models/'+path)
//const cellGreen = new GLTFShape('models/r1c1_border_blue.gltf')





const highlightTranform = new Transform({
  position: new Vector3(4,1,4)
})

//log(test)
highlight.addComponent(cellGreen)
highlight.addComponent(highlightTranform)
engine.addEntity(highlight)


const highlight7 = new Entity()

const highlightTranform7 = new Transform({
  position: new Vector3(4,3,6),
  scale: new Vector3(1,1,1)
})

//log(test)
highlight7.addComponent(highlightTranform7)
highlight7.addComponent(cellGreen)
engine.addEntity(highlight7)


const highlight6 = new Entity()

const highlightGreen6 = new GLTFShape('models/r1c1_border_blue.gltf')

const highlightTranform6 = new Transform({
  position: new Vector3(4,1,6),
  scale: new Vector3(1,1,1)
})

//log(test)
highlight6.addComponent(highlightTranform6)
highlight6.addComponent(highlightGreen6)
engine.addEntity(highlight6)



const highlight5 = new Entity()

const highlightGreen5 = new GLTFShape('models/r1c1_border_blue.gltf')

const highlightTranform5 = new Transform({
  position: new Vector3(6,1,6),
  scale: new Vector3(1,1,1)
})

//log(test)
highlight5.addComponent(highlightTranform5)
highlight5.addComponent(highlightGreen5)
engine.addEntity(highlight5)




const highlight3 = new Entity()

const highlightGreen3 = new GLTFShape('models/r1c1_border_brown.gltf')

const highlightTranform3 = new Transform({
  position: new Vector3(6,1,4),
  scale: new Vector3(1,1,1)
})

//log(test)
highlight3.addComponent(highlightTranform3)
highlight3.addComponent(highlightGreen3)
engine.addEntity(highlight3)



const highlight4 = new Entity()

const highlightGreen4 = new GLTFShape('models/r1c1_border_brown.gltf')

const highlightTranform4 = new Transform({
  position: new Vector3(8,1,4),
  rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(1,1,1)
})

//log(test)
highlight4.addComponent(highlightTranform4)
highlight4.addComponent(highlightGreen4)
engine.addEntity(highlight4)


// const highlight2 = new Entity()

// const highlightGreen2 = new GLTFShape('models/r1c1_highlight_green2.glb')

// const highlightTranform2 = new Transform({
//   position: new Vector3(4,1,4),
//   scale: new Vector3(1.01,1.01,1.01)
// })

// //log(test)
// highlight2.addComponent(highlightGreen2)
// highlight2.addComponent(highlightTranform2)
// engine.addEntity(highlight2)



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


import { ObjectId } from "../node_modules/mongodb/mongodb";

export type ModelData = {
  name: string, 
  price: number, 
  category: string
  // id?: ObjectId

}


// interface ModelData  {
//   name: string, 
//   price: number, 
//   category: string
//   // id?: ObjectId

// }




export async function getVoxelJSON(url: string): Promise<ModelData[]> {
  try {
    let response = await fetch(url).then()
    let json = await response.json()
    log('-----')
    log(json)
    return json.tiles
  } catch {
    log('error fetching from Mongodb server')
    log('url used: ', url)
    return []
  }
}

let test = '{"name":"new new new",  "price":2,  "category":"Yo"}'

let jsonObj = JSON.parse(test)
//log(jsonObj)

export async function postJSON(url: string): Promise<ModelData[]> {
  try {
    let response = await fetch(url,{
      method: 'POST',
      body: JSON.stringify({name:"new new new",  price:2,  category:"Yo"}),
      headers: {Accept: 'application/json',
      'Content-Type': 'application/json'} 
    }).then()
    let json = await response.json()
    log('-----')
  //  log(json)
    return json.tiles
  } catch {
    log('error fetching from Mongodb server')
    log('url used: ', url)
    return []
  }
}

// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// postData('http://localhost:8080', {name:"new new new",  price:2,  category:"Yo"})
//   .then(data => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });
// /// --- Spawn cubes ---

//Read Cube
const readCube = spawnCube(6, 1, 8)

 const readEntity = new Entity()
const readText = new TextShape("Read dB. Click Cube")
readText.fontSize = 2

readText.color = Color3.Black()
readEntity.addComponent(readText)
readEntity.addComponent(new Transform({position: new Vector3(0,1,0)}))

readEntity.setParent(readCube)

const url:string = 'http://localhost:8080/games'
const tmpJson = getVoxelJSON(url)

readCube.addComponent(
  new OnPointerDown(() => {
    
log('----')
log(tmpJson)
log('----')

    log('Read from database:')
    log('show output here!')


   // const tmpJson = getVoxelJSON(url)
  })
)



const readPlane = new Entity()
readPlane.addComponent(new PlaneShape())
readPlane.addComponent( new Transform({
  position: new Vector3(0,0,1),
  rotation:  Quaternion.Euler(0, 0, 90), 
  scale: new Vector3(1,2,1)
}))

const planeMaterial = new Material()
let addTexture:Texture = new Texture("https://ipfs.io/ipfs/QmebSLNxGi171bWr17q8Lv2yEP7ZcpYq9ooqH6DYuFM1WK?filename=stripe.png")//images/stripe.png')  //?raw=true

planeMaterial.alphaTexture = addTexture
// planeMaterial.
planeMaterial.emissiveColor = Color3.Yellow()
planeMaterial.emissiveIntensity = 3
planeMaterial.castShadows = true

readPlane.addComponent(planeMaterial)
readPlane.setParent(readCube)
// readPlane.

const planeTextEnt = new Entity()
const planeText = new TextShape("Read dB. Click Cube")
planeText.fontSize = 2

planeText.color = Color3.Black()
planeTextEnt.addComponent(planeText)
planeTextEnt.addComponent(new Transform({position: new Vector3(0,0,1),
  rotation:  Quaternion.Euler(0, 180, 90), }))

planeTextEnt.setParent(readPlane)

engine.addEntity(readPlane)




const readPlane1 = new Entity()
readPlane1.addComponent(new PlaneShape())
readPlane1.addComponent( new Transform({
  position: new Vector3(8,2,8),
  rotation:  Quaternion.Euler(0, 0, 90), 
  scale: new Vector3(1,3,1)
}))

const planeMaterial1 = new Material()
//let addTexture:Texture = new Texture("https://ipfs.io/ipfs/QmebSLNxGi171bWr17q8Lv2yEP7ZcpYq9ooqH6DYuFM1WK?filename=stripe.png")//images/stripe.png')  //?raw=true

planeMaterial1.alphaTexture = addTexture
// planeMaterial1.
planeMaterial1.emissiveColor = Color3.Green()
planeMaterial1.emissiveIntensity = 3
planeMaterial1.castShadows = true

readPlane1.addComponent(planeMaterial1)

// readPlane1.

engine.addEntity(readPlane1)



const readPlane2 = new Entity()
readPlane2.addComponent(new PlaneShape())
readPlane2.addComponent( new Transform({
  position: new Vector3(8,4,8),
  rotation:  Quaternion.Euler(0, 0, 90), 
  scale: new Vector3(1,3,1)
}))

const planeMaterial2 = new Material()
//let addTexture:Texture = new Texture("https://ipfs.io/ipfs/QmebSLNxGi171bWr17q8Lv2yEP7ZcpYq9ooqH6DYuFM1WK?filename=stripe.png")//images/stripe.png')  //?raw=true

planeMaterial2.alphaTexture = addTexture
// planeMaterial2.
planeMaterial2.emissiveColor = Color3.Green()
planeMaterial2.emissiveIntensity = 3
planeMaterial2.castShadows = true

readPlane2.addComponent(planeMaterial2)

// readPlane2.

engine.addEntity(readPlane2)




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
  new OnPointerDown(() => {
        //postJSON(url)
       // post2(url)

    recId ++
    log('Write to database: record id = '+ recId)

  })
)
