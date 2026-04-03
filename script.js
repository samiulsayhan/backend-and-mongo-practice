const fs = require('fs');

// fs.writeFile("./new directory/hey.txt", "ami kisu jani na", function (err) {

//     if (err) console.error("eror asche karon new directory ae folder tae nae")
//     else console.log("done")
// })

// fs.appendFile("hey.txt", " , oita to uni jane", function (err) {

//     if (err) console.error(err)
//     else console.log("done")
// })

// fs.unlink("hey.txt",  function (err) {

//     if (err) console.error(err)
//     else console.log("done")
// })

// fs.rename( "hello.jsx","hello.txt", function (err) {

//     if (err) console.error(err)
//     else console.log("done")
// })

// fs.mkdir("./new directory/new",{recursive : true}, function (err) {

//     if (err) console.error(err)
//     else console.log("done")
// })
// fs.rm("./new directory/new",{recursive :true}, function (err) {

//     if (err) console.error(err)
//     else console.log("done")
// })
// fs.copyFile("./new directory/hey.txt","noi.txt", function (err) {

//     if (err) console.error(err)
//     else console.log("done")
// })
// fs.readFile("test.js","utf-8", function(err, data){
//     if(err){
//         console.error(err.message)
//         return
//     }
//     console.log(data)

// })

// we can read image also and can get the buffer code ....

// fs.readFile("minddesk.PNG", function(err, data){
//     if(err){
//         console.error(err.message)
//         return
//     }
//     // aevabe ami akta image ar buffer code nea arekta image banaete pari...
//     console.log(data)
//     fs.writeFile("new.txt",data,function(err){
//         if(err) console.error("dea thik hoi nae")
//             else console.log()
//     })

// })

// aevabe sharp use kore image ar size compress kora jae ar joono alada kore app lage na..... fun learning .(+_+)
// const sharp = require("sharp");

// sharp("new.png") // input image
//   .resize(100)   // reduce width (auto height)
//   .jpeg({ quality: 100 }) // reduce quality (0–100)
//   .toFile("small.png")   // output
//   .then(() => console.log("Compressed!"))
//   .catch(err => console.error(err));