
const fs = require('fs');

// fs.writeFile ('./texto.txt', 'texto linea uno', function(err){
//     if (err){
//         console.log(err);
//     }
// console.log('Archivo creado');
// });

// console.log('ultima linea de codigo');


fs.readFile('./README.md',function(err, data){
if(err){
    console.log(err);
}
console.log(data.toString());
})



// const users = query('SELECT * FROM Users')
// query('Select * FROM Users', function(err, users ){
// if (err){
//     console.log(err)
// }

// if (users){

// }

// })