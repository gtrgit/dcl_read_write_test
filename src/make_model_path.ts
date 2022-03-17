



const modelName:any = 
['r1c1','r1c2','r1c3','r1c4','r1c5','r1c6',
'r2c1','r2c2','r2c3','r2c4','r2c5','r2c6','r2c7',
'r3c1','r3c2','r3c3','r3c4','r3c5','r3c6','r3c7','r3c8',
'r4c1','r4c2','r4c3','r4c4',
'r5c1','r5c2','r5c3','r5c4','r5c5','r5c6','r5c7','r5c8',
'r6c1','r6c2','r6c3','r6c4','r6c5','r6c6','r6c7','r6c8','r6c9','r6c10']

const modelType:any = ['body']

const modelColour:any = ['black','blue','brown','green','grey','light_grey','orange','pink','red','white','yellow']


// export function modelPaths():any {
    
//     for (let index = 0; index < modelName.length; index++) {
//         const name = modelName[index];
//     log('{'+'"'+name+'"'+': [')
      
//             for (let index = 0; index < modelColour.length; index++) {
//                 const colour = modelColour[index];
                
//                 log('{'+'"'+colour+'": ['+'{"modelColour": "models/seperated_blocks/'+name+'_body_'+colour+'.gltf"'
//                 +',"faceColour": "models/seperated_blocks/'+name+'_face_'+colour+'.gltf"'
//                 +',"highlightColour": "models/seperated_blocks/'+name+'highlight'+colour+'.gltf"},')
//             }
//         log(']},')
//         }
//     log('}')     

// }


log('{"models": [')
export function modelPaths():any {
    
    for (let index = 0; index < modelName.length; index++) {
        const name = modelName[index];
    log('{"model": "'+name+'"'+', "modelTypes":  [')
        for (let index = 0; index < modelType.length; index++) {
            const type = modelType[index];
        log(' {"type": "'+type+'", "colour": [')
            for (let index = 0; index < modelColour.length; index++) {
                const colour = modelColour[index];
                
                if(index<modelColour.length && index+1!=modelColour.length ) {
                        log('    {"modelColour": "models/seperated_blocks/'+name+'_'+type+'_'+colour+'.gltf"'
                        +',"faceColour": "models/seperated_blocks/'+name+'_face_'+colour+'.gltf"'
                        +',"highlightColour": "models/seperated_blocks/'+name+'_highlight_'+colour+'.gltf"'
                        +',"collider": "models/seperated_blocks/'+name+'_collider.gltf"},')
                }


                 if (index+1==modelColour.length){
                    log('    {"modelColour": "models/seperated_blocks/'+name+'_'+type+'_'+colour+'.gltf"'
                    +',"faceColour": "models/seperated_blocks/'+name+'_face_'+colour+'.gltf"'
                    +',"highlightColour": "models/seperated_blocks/'+name+'_highlight_'+colour+'.gltf"'
                    +',"collider": "models/seperated_blocks/'+name+'_collider.gltf"}')

             }
            }
        log(' ]}')
        }
    log(']},')   
    }
    log(']}')
    

}

