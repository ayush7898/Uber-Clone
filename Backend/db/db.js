const mongoose = require('mongoose')

function connectTodb(){
    mongoose.connect(process.env.DB_CONNECT    
    ).then(()=>{
        console.log("Connected to DB")
    })
    .catch(err => console.error(err))
}
module.exports = connectTodb