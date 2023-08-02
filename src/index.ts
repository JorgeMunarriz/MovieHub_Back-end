
import { connect } from 'mongoose';
import config from './config/config'
import app from './server'

const PORT = config.app.PORT;



connect().then( async function onSrverStart(){
    console.log("Connected to database");
    app.listen(PORT, ()=>{
        console.log(`Server listening on ${PORT}`)
    })
})
