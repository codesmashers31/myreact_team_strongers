
//import fs,{ unlink } from 'fs';


//console.log(fs);

// fs.writeFile(); - create/overwrite file (async)
// fs.readFile(); Read the File

// fs.appendFile() - append data to a file. add the conent

// fs.unlink() - delete file

// fs.rename()- Rename file

// fs.existsSync(); - check file existence

// Directory:

// fs.mkdir() - create folder

// fs.readdir() - Read all files in a folder

// fs.rmdir() - Remove Folder (if empty)

// File Information (Stats)

// fs.stat() - get the info (serialize,createDecipheriv,modifty )




fs.writeFile("newfile.txt","This is node file system",(err)=>{

if(err) throw err;
console.log("file Created...");



});

fs.readFile("newfile.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
    
})


fs - object . readFile("filename","Message",()=>{
    console.log('This file is created');
    
})

fs.appendFile("newfile.txt","This is node apped datas",(err)=>{
     if(err) throw err;
     console.log("file Created...");
})

fs.readFile("newfile.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
    
})


// const filepath = "./newfile.txt"


// unlink(filepath,()=>{
//       console.log("Deletred");
// })



fs.unlink("./newfile.txt",()=>{
    console.log("Deletred");
})