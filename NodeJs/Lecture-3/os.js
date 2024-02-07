let os=require('os');
// console.log(os);
// console.log(os.freemem());//1434198016
const freememory=os.freemem();
console.log(freememory);
let div=1024*1024*1024;
// console.log(`${freememory/div}`);
// console.log(os.arch());//x64

const total_mem=os.totalmem();
console.log(total_mem);
// console.log(total_mem/div);
console.log(os.hostname());//LAPTOP-18V0AV9G
console.log(os.type());//Windows_NT
// console.log(os.tmpdir());//C:\Users\santo\AppData\Local\Temp
// console.log(os.platform());//win32

