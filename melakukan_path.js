// Untuk melihat path dari sebuah file
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

// Untuk melihat informasi memory

const os = require('os');

var nama_host = os.hostname();

var free_memory = os.freemem();

var total_memory = os.totalmem();

var tipe_os = os.type();

// Dengan concatenations
/*console.log('Nama Host : ' + nama_host);
console.log('Free Memory : ' + free_memory);
console.log('Total Memory : ' + total_memory);
console.log('Tipe Sistem Operasi : ' + tipe_os);*/

//Tanpa concatenations
console.log(`Total Memory : ${total_memory}`);
console.log(`Free Memory : ${free_memory}`);
console.log(`Nama host : ${nama_host}`)

// Untuk file systems
const fs = require('fs');

//const files = fs.readdirSync('./');
//console.log(files);

fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Result', files);
});