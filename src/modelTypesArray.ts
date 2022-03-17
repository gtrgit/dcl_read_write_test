import {default as modelTypes} from "modelTypeColour.json"

export let modelName:any = []

for (let index = 0; index < modelTypes.models.length; index++) {
    const element = modelTypes.models[1].modelTypes[2].colour[2].modelColour;
    
    modelName.push(element)
}
