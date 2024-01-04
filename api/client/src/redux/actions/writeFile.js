const fs=require("fs")
const { stdin, stdout } = require("process")
const readline=require("readline")
const {join, dirname}=require("path")
// const TYPES =require('../types/clothes _test')

const rl=readline.createInterface({input:stdin, output:stdout})

function Elmt(functionName, type, payloadName, url,sex='all'){
    this.functionName=functionName;
    this.type=type;
    this.payloadName=payloadName;
    this.url=url;
    this.sex=sex;
}
const elmts = [
  new Elmt(
    "loadWatches",
    "WATCHES",
    "watches",
    "/api/articles/accessories/watches?page=${page}&&sex=${sex}&&brand=${brand}"
  ),
  new Elmt(
    "loadSportMats",
    "SPORTMATS",
    "sportMats",
    "/api/articles/accessories/sportsMats?page=${page}&&sex=${sex}&&brand=${brand}"
  ),
  new Elmt(
    "socks",
    "SOCKS",
    "socks",
    "/api/articles/accessories/socks?page=${page}&&sex=${sex}&&brand=${brand}"
  ),
];


for (let v of elmts){
    fs.appendFileSync(join(__dirname, "accessories.js"),
        `
        export const ${v.functionName}=(page=0, sex="all", brand="A")=>async(dispatch)=>{\n
            dispatch({type:TYPES.IS_LOADING_${v.type}})\n
            try{\n
                const {data:${v.payloadName}}=await Axios({\n
                    method:"GET",\n
                    url:\`${v.url}\`,\n
                })\n
                if(${v.payloadName}){\n
                    dispatch({type:TYPES.LOADING_SUCCESS_${v.type}, payload:${v.payloadName}.items})\n
                }\n
            }catch(e){\n
                dispatch({type:TYPES.LOADING_ERROR_${v.type}, payload:ERROR_MESSAGE})\n
            }\n
        }
        
        `

    )
}


// rl.question("Nombre de variales à ajouter", n=>{
    // rl.question("Variable à ajouter", v=>{
        // rl.close()
    // })

    // rl.close()
// })
