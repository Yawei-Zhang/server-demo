require('dotenv').config({path:__dirname+'/./../../.env'})
console.log(process.env.DB_PORT)
console.log(__dirname)
// console.log('No value for PORT yet:', process.env.PORT);
//
// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').load();
// }
//
// console.log('Now the value for PORT is:', process.env.PORT);