import path from 'path';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url)

//console.log(__filename);

const __dirname = dirname(__filename)

//console.log(__dirname);

const folderPath = path.join(__dirname,"data")

const filepath =  path.join(folderPath,"simple.txt")

console.log(folderPath,filepath);



fs.mkdir("data",()=>{
    console.log('succfully generated folder');
})

    let a = 10;
    let b=10;
    let datas= a+b 

fs.writeFile(filepath,`${datas}this is datas`,(err)=>{

  
    console.log('Succfully done');
    if(err) return console.log('Error', err);
  
    
    
    
    
})