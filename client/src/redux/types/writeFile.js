const fs=require("fs")
const { stdin, stdout } = require("process")
const readline=require("readline")
const {join, dirname}=require("path")
const TYPES =require('../types/clothes _test')
const rl=readline.createInterface({input:stdin, output:stdout})

const elmts=["WATCHES","SOCKS", "SPORTSMAT", "HATS"]


for (let v of elmts){
    fs.appendFileSync(join(__dirname, "accessories.js"),
        `export const IS_LOADING_${v}="IS_LOADING_${v}"\n`
    )
}



// rl.question("Nombre de variales à ajouter", n=>{
    // rl.question("Variable à ajouter", v=>{
        // rl.close()
    // })

    // rl.close()
// })
