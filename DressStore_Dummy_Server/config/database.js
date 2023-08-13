const mongoose = require('mongoose');

const CONNECTION_STRING = 'mongodb://localhost:27017/dressStore'

module.exports = async () =>{
    try{
        await mongoose.connect(CONNECTION_STRING,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database connected')
    }
    catch(err)
    {
        console.log(err.message)
        process.exit(1)

    }
}