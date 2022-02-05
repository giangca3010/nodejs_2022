
const mongoose = require('mongoose');

async function connect() {
    try{
        await mongoose.connect('mongodb://localhost:27017/f8_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect access')
    } catch(error) {
        console.log('connect fail!!!')
    }

}

module.exports = { connect };